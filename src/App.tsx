import React from 'react';
import Navigation from './navigation';
import ContextProvider from './context';
import 'react-native-gesture-handler';

function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

export default App;
