import React from 'react';

import {displayName} from './app.json';
import {version} from './package.json';
import {LoginScreen} from './screens/LoginScreen';
import {SplashScreen} from './screens/SplashScreen';

function App() {
  const showSplashScreen = false;
  return showSplashScreen ? (
    <SplashScreen name={displayName} version={version} />
  ) : (
    <LoginScreen />
  );
}

export default App;
