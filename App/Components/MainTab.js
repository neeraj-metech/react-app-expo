import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../Screens/HomeScreen'
import AboutScreen from '../Screens/AboutScreen'
import TopicsScreen from '../Screens/TopicsScreen'
import Registration from '../Screens/Registration/Registration'

const HomeStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();
const TopicStack = createNativeStackNavigator();
const RegStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: '#009387' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutStackScreen}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Registration"
                component={RegStackScreen}
                options={{
                    tabBarLabel: 'Registration',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="card-account-details" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Topics"
                component={TopicStackScreen}
                options={{
                    tabBarLabel: 'Topics',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="briefcase" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator >
    )
}
export default MainTab

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                fontWeight: 'bold',
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        </HomeStack.Navigator>
    )
}
const AboutStackScreen = ({ navigation }) => {
    return (
        <AboutStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                fontWeight: 'bold',
            }
        }}>
            <AboutStack.Screen name="About" component={AboutScreen} />
        </AboutStack.Navigator>
    )

}
const TopicStackScreen = ({ navigation }) => {
    return (
        <TopicStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                fontWeight: 'bold',
            }
        }}>
            <TopicStack.Screen name="Topics" component={TopicsScreen} />
        </TopicStack.Navigator>
    )
}
const RegStackScreen = ({ navigation }) => {
    return (
        <RegStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                fontWeight: 'bold',
            }
        }}>
            <RegStack.Screen name="Registration" component={Registration} />
        </RegStack.Navigator>
    )
}
