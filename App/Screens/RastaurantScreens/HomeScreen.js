import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../../Components/RastaurantComponents/SearchBar'
import yelp from '../../Components/RastaurantComponents/Api/yelp'
import RestaurantDetail from '../../Components/RastaurantComponents/RestaurantDetail'
const HomeScreen = () => {
    const [term, Setterm] = useState('');
    const [results, setResults] = useState([]);
    const searchApi = async (getTerm) => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: getTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    };

    useEffect(() => {
        searchApi('pasta')
    }, [])
    const filterRestultByPrice = (price) => {
        //price === '$' || "$$" || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }
    return (
        <View>
            <SearchBar
                value={term}
                changetext={text => Setterm(text)}
                onEnter={() => searchApi(term)}
            />
            <Text>We have found {results.length} results</Text>
            <RestaurantDetail title="Cost Effective" result={filterRestultByPrice('$')} />
            <RestaurantDetail title="Bit Pricer" result={filterRestultByPrice('$$')} />
            <RestaurantDetail title="Big Spender" result={filterRestultByPrice('$$$')} />
        </View>
    )
}

const styles = StyleSheet.create({

})
export default HomeScreen