import React, { Component } from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'


function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>It is About page component.</Text>
            <Button
                title="Go to Topics"
                onPress={() => navigation.navigate('Topics')}
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

export default AboutScreen