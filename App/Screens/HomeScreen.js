import React, { Component, useEffect, useState } from 'react'
import { Text, TextInput, View, Button, StyleSheet } from 'react-native'


function HomeScreen({ navigation }) {
    const [item, setItem] = useState({ postData: [] });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                setItem({ postData: responseJson })

            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <View style={styles.container}>
            <Text>Home page</Text>
            {
                item.postData.map((val, key) => (
                    <View key={val.id}>
                        <Text>{val.title}</Text>
                    </View>
                )
                )
            }
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