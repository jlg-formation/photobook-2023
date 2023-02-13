import React, {useState} from 'react';

import {displayName} from './app.json';
import {version} from './package.json';
import {LoginScreen} from './screens/LoginScreen';
import {MenuScreen} from './screens/MenuScreen';
import {SplashScreen} from './screens/SplashScreen';

function App() {
  const showSplashScreen = false;

  const [isConnected, setIsConnected] = useState(false);

  const onConnected = () => {
    console.log('onConnected');
    setIsConnected(true);
  };
  return showSplashScreen ? (
    <SplashScreen name={displayName} version={version} />
  ) : isConnected ? (
    <MenuScreen />
  ) : (
    <LoginScreen onConnected={onConnected} />
  );
}

export default App;
