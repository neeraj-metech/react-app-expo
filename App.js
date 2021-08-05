import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTab from './App/Components/MainTab';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTab} />
        {/* <Drawer.Screen name="About" component={AboutStackScreen} /> */}
        {/* <Drawer.Screen name="Topics" component={TopicStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );

}

