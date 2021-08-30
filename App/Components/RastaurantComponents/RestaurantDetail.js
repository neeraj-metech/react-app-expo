import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const RestaurantDetail = ({ title, result }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>{result.length}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default RestaurantDetail