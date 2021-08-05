import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App/Screens/HomeScreen'
import AboutScreen from './App/Screens/AboutScreen'
import TopicsScreen from './App/Screens/TopicsScreen'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTintStyle: {
          fontWeight: 'bold',
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Topics" component={TopicsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

