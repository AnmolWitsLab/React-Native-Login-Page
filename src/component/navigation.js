import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../view/homePage';
import LoginPage from '../view/loginPage';
import RegisterPage from '../view/registerPage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
