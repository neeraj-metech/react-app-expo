import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../../Components/RastaurantComponents/SearchBar'
const HomeScreen = () => {
    const [searchText, SetsearchText] = useState('');
    console.log(searchText)
    return (
        <View>
            <SearchBar
                value={searchText}
                changetext={text => SetsearchText(text)}
                onEnter={() => console.log('Hit enter button')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})
export default HomeScreen