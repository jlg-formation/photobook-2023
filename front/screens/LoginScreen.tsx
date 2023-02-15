import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  ColorSchemeName,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAuthenticationStore} from '../store/authentication.store';
import {gs} from '../styles/global';
import {useComposedStyles} from '../styles/hook';

export const LoginScreen = () => {
  const {s} = useComposedStyles(gs, styles);
  const {connect} = useAuthenticationStore();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onConnect = async () => {
    try {
      setErrorMsg('');
      setIsConnecting(true);
      await connect(login, password);
    } catch (err) {
      console.log('err: ', err);
      if (err instanceof Error) {
        setErrorMsg(err.message);
      }
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.h1}>Se connecter</Text>
      <View style={s.form}>
        <View style={s.label}>
          <Text style={s.labelText}>Login</Text>
          <TextInput
            style={s.textInput}
            onChangeText={setLogin}
            value={login}
          />
        </View>
        <View style={s.label}>
          <Text style={s.labelText}>Mot de passe</Text>
          <TextInput
            style={s.textInput}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <View style={s.errorContainer}>
          <Text style={s.error}>{errorMsg}</Text>
        </View>
        <View style={s.buttonContainer}>
          {isConnecting ? (
            <ActivityIndicator />
          ) : (
            <Button title="Se connecter" onPress={onConnect} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = (cs: ColorSchemeName) => {
  const isDark = cs === 'dark';
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: isDark ? 'black' : 'white',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
  });
};
