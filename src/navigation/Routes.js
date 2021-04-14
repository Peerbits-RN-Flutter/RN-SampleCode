import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './Navigator';


//Spalsh
import Splash from '../components/Splash/ChildComponent/Splash';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none" initialRouteName="Splash">
        <Stack.Screen component={Splash} name="Splash" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};