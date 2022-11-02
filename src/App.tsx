import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import MainStack from './Stacks/MainStack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
};

export default App;
