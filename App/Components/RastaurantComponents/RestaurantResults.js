import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import RestaurantDetail from './RestaurantDetail'
const RestaurantResults = ({ title, result, navigation }) => {
    if (!result.length) {
        return null
    }
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
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id, 'name': 'neerej' })}>
                            <RestaurantDetail
                                image={item.image_url}
                                title={item.name}
                                star={item.rating}
                                review={item.review_count}
                            />
                        </TouchableOpacity>
                    )
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