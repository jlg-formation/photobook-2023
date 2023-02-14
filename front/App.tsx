import React from 'react';

import {displayName} from './app.json';
import {version} from './package.json';
import {LoginScreen} from './screens/LoginScreen';
import {MenuScreen} from './screens/MenuScreen';
import {SplashScreen} from './screens/SplashScreen';
import {
  isConnectedSelector,
  useAuthenticationStore,
} from './store/authentication.store';

function App() {
  const showSplashScreen = false;

  const {isConnected} = useAuthenticationStore(isConnectedSelector);

  return showSplashScreen ? (
    <SplashScreen name={displayName} version={version} />
  ) : isConnected ? (
    <MenuScreen />
  ) : (
    <LoginScreen />
  );
}

export default App;
