import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet, Modal, Pressable, ActivityIndicator, TouchableOpacity } from 'react-native'
import { NativeBaseProvider, Divider, ScrollView } from 'native-base'


function HomeScreen({ navigation }) {
    const [item, setItem] = useState({ postData: [] });
    const [singleItem, setSingleItem] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                setItem({ postData: responseJson })

            })
            .catch((error) => {
                console.error(error);
            });
    }, [])
    const getSinglePost = async (postId) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((responseJson) => {
                setSingleItem(responseJson)
                setModalVisible(true)
                // console.log(responseJson)

            })
            .catch((error) => {
                console.error(error);
                setSingleItem({})
            });
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <ScrollView>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}

                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <ScrollView>
                                    <Text style={styles.modalText}>Title : {singleItem.title && singleItem.title}</Text>
                                    <Text style={styles.modalText}>Body : {singleItem.body && singleItem.body}</Text>
                                </ScrollView>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <Text style={{ color: '#ffffff' }}>Home page</Text>
                    {
                        item.postData ?
                            item.postData.map((val, key) => (
                                <View key={val.id} style={styles.titleContainer}>
                                    <TouchableOpacity onPress={() => { getSinglePost(val.id) }}>
                                        <Text style={styles.title}>{key + 1}. {val.title}</Text>
                                    </TouchableOpacity>
                                    <Divider my={2} bg='#e0e0e0' />
                                </View>

                            )
                            )
                            :
                            <ActivityIndicator
                                size="large"
                                color="white"
                            />
                    }
                </ScrollView>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />

            </View>
        </NativeBaseProvider >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        paddingLeft: 5,
        paddingRight: 5,

    },
    titleContainer: {
        marginTop: 10,
    },
    title: {
        color: '#000000',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})

export default HomeScreen