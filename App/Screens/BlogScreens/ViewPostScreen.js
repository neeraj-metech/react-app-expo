import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../../Components/BlogComponent/Context/BlogContext'
import { Feather } from '@expo/vector-icons'
const ViewPostScreen = (props) => {
    const { navigation } = props
    const { id } = props.route.params
    const { state } = useContext(Context)
    const post = state.find((post) => post.id == id)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: id })}>
                    <Feather name="edit" size={30} color="#fff" />
                </TouchableOpacity>
            ),
        });
    }, [navigation])


    // console.log(post)
    return (
        <View style={styles.container}>
            <Text style={styles.psotTitle}>Title: {post.title}</Text>
            <Text>Description: {post.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10
    },
    psotTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})
export default ViewPostScreen