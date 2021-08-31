import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import RestaurantDetailScreen from './RestaurantDetailScreen';

const Stack = createNativeStackNavigator();

const MainAppScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: 'Home'
                }} />
                <Stack.Screen name="Detail" component={RestaurantDetailScreen} options={{
                    title: 'Detail'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})
export default MainAppScreen