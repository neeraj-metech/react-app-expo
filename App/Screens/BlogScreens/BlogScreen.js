import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../../Components/BlogComponent/Context/BlogContext'
import { Feather } from '@expo/vector-icons'

const BlogScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                    <Feather name="plus" size={30} color="#fff" />
                </TouchableOpacity>
            ),
        });
    }, [navigation])

    return (
        <View style={styles.container}>
            <FlatList
                data={state}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('View', { id: item.id })}>
                            <View style={styles.post}>
                                <Text style={styles.postTitle}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" size={24} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10
    },
    post: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 5
    },
    postTitle: {
        fontSize: 16,
        fontWeight: "bold"
    }
})
export default BlogScreen