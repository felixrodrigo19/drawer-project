import React from 'react';
import { View } from 'react-native';
import MyDrawer from './src/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}