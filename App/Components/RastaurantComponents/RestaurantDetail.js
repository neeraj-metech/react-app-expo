import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const RestaurantDetail = ({ image, title, star, review }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ 'uri': image }} />
            <Text style={styles.title}>{title}</Text>
            <Text>{star} Stars, {review} Reviews</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginVertical: 5
    },
    title: {
        fontWeight: 'bold'
    },
    image: {
        height: 100,
        borderRadius: 5
    }
})
export default RestaurantDetail