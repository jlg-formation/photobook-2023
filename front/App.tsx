import React from 'react';

import {SplashScreen} from './screens/SplashScreen';
import {displayName} from './app.json';
import {version} from './package.json';

function App() {
  return <SplashScreen name={displayName} version={version} />;
}

export default App;
