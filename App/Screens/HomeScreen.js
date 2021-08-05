import React, { Component } from 'react'
import { Text, TextInput, View, Button, StyleSheet } from 'react-native'

function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Home page</Text>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
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

export default HomeScreen