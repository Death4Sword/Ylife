import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import eventScreen from './src/screens/event';
import RegisterScreen from './src/screens/register';
import ViewEvent from './src/screens/viewEvent';
import SpaceStudent from './src/screens/spaceStudent';
import SpaceCreator from './src/screens/spaceCreator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="event" component={eventScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="viewEvent" component={ViewEvent} />
        <Stack.Screen name="spaceStudent" component={SpaceStudent} />
        <Stack.Screen name="spaceCreator" component={SpaceCreator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;