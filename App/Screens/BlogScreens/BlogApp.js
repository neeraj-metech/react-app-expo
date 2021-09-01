import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from '../../Components/BlogComponent/Context/BlogContext'

import BlogScreen from './BlogScreen'
import AddPostScreen from './AddPostScreen'
import ViewPostScreen from './ViewPostScreen'
import EditPostScreen from './EditPostScreen'

const Stack = createNativeStackNavigator();

const BlogApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}>
                <Stack.Screen name="Blog" component={BlogScreen} options={{
                    title: 'Blog'
                }} />
                <Stack.Screen name="Add" component={AddPostScreen} />
                <Stack.Screen name="View" component={ViewPostScreen} />
                <Stack.Screen name="Edit" component={EditPostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})
export default () => {
    return (
        <Provider>
            <BlogApp />
        </Provider>
    )
}