import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ value, changetext, onEnter }) => {
    return (
        <View style={styles.background}>
            <Feather style={styles.searchIcon} name="search" />
            <TextInput
                style={styles.searchInputField}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search"
                onChangeText={newText => changetext(newText)}
                onEndEditing={() => onEnter()}
                value={value}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        borderWidth: 1,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 5,
        height: 40,
        flexDirection: 'row'
    },
    searchIcon: {
        fontSize: 30,
        marginHorizontal: 10,
        alignSelf: 'center'
    }, searchInputField: {
        flex: 1
    }
})
export default SearchBar