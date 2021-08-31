import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import RestaurantDetail from './RestaurantDetail'
const RestaurantResults = ({ title, result }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                data={result}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    //console.log(item)
                    return <RestaurantDetail
                        image={item.image_url}
                        title={item.name}
                        star={item.rating}
                        review={item.review_count}
                    />
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,

    }
})
export default RestaurantResults