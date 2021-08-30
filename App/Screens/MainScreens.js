import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import MainTab from './App/Components/MainTab';
import HomeScreen from './HomeScreen'
import AboutScreen from './AboutScreen'
import TopicsScreen from './TopicsScreen'
import Registration from './Registration/Registration'

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function MainScreens() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#009387',
                },
                headerTintColor: '#fff',
                headerTintStyle: {
                    fontWeight: 'bold',
                }
            }}>
                <Tab.Screen name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen
                    name="About"
                    component={AboutScreen}
                    options={{
                        tabBarLabel: 'About',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Topics"
                    component={TopicsScreen}
                    options={{
                        tabBarLabel: 'Topics',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="briefcase" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Registration"
                    component={Registration}
                    options={{
                        tabBarLabel: 'Registration',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="card-account-details" color={color} size={26} />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );

}

