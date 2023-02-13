import React from 'react';

import {displayName} from './app.json';
import {version} from './package.json';
import {SplashScreen} from './screens/SplashScreen';

function App() {
  return <SplashScreen name={displayName} version={version} />;
}

export default App;
