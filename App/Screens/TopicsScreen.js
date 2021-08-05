import React, { Component } from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TopicsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>It is Topics page component.</Text>
            <Button
                title="Go to Topics again"
                onPress={() => navigation.push('Topics')}
            />
            <Button
                title="Go to Back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go to first page"
                onPress={() => navigation.popToTop()}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default TopicsScreen