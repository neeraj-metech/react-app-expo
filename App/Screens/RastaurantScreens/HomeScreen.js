import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../../Components/RastaurantComponents/SearchBar'
import RestaurantResults from '../../Components/RastaurantComponents/RestaurantResults'
import useResults from '../../Components/RastaurantComponents/hooks/useResults'
const HomeScreen = () => {
    const [term, Setterm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterRestultByPrice = (price) => {
        //price === '$' || "$$" || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }
    return (
        <View style={{ flex: 1 }}>
            {/* or we can use empty element like <></> */}
            <SearchBar
                value={term}
                changetext={text => Setterm(text)}
                onEnter={() => searchApi(term)}
            />
            {/* <Text>We have found {results.length} results</Text> */}
            {
                errorMessage ?
                    <Text>{errorMessage}</Text>
                    :
                    <ScrollView>
                        {
                            filterRestultByPrice('$').length > 0 ?
                                <RestaurantResults title="Cost Effective" result={filterRestultByPrice('$')} />
                                : null

                        }
                        {
                            filterRestultByPrice('$$').length > 0 ?
                                <RestaurantResults title="Bit Pricer" result={filterRestultByPrice('$$')} />
                                : null

                        }
                        {
                            filterRestultByPrice('$$$').length > 0 ?
                                <RestaurantResults title="Big Spender" result={filterRestultByPrice('$$$')} />
                                : null

                        }
                    </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({

})
export default HomeScreen