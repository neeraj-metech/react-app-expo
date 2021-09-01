import React, { useState, useContext } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context } from '../../Components/BlogComponent/Context/BlogContext'
const EditPostScreen = (props) => {
    const { navigation } = props
    const { id } = props.route.params
    const { state, editBlogPost } = useContext(Context)
    const post = state.find((post) => post.id == id)

    const [addPost, setAddPost] = useState({ id: post.id, title: post.title, description: post.description })
    const updateTextField = (text, field) => {
        switch (field) {
            case 'title':
                setAddPost({ ...addPost, title: text })
                return
            case 'description':
                setAddPost({ ...addPost, description: text })
                return
            default:
                return
        }
    }
    //console.log(addPost)
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={addPost.title} onChangeText={(text) => updateTextField(text, 'title')} />
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input} value={addPost.description} onChangeText={(text) => updateTextField(text, 'description')} />
            <View>
                <Button color="tomato" title="Edit post" onPress={() => editBlogPost(addPost, () => { navigation.navigate('View', { id: addPost.id }) })} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10

    },
    label: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 5,
        padding: 5
    }
})
export default EditPostScreen