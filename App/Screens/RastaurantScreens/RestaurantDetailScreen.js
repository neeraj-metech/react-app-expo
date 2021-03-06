import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../../Components/RastaurantComponents/Api/yelp'
const RestaurantDetailScreen = (props) => {
    const [result, setResult] = useState(null)

    const id = props.route.params.id;
    const name = props.route.params.name;
    // console.log(name)
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ 'uri': item }} />
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 250
    }
})
export default RestaurantDetailScreen