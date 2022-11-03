import React from 'react';
import Navigation from './src/component/navigation';
import {AuthProvider} from './src/context/authContext';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
