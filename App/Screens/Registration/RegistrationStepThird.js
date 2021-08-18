import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'

function RegistrationStepThird(props, { navigation }) {
    // const { step, phone, gender, address } = props.value;
    const handleChange = props.handleChange;
    const handleContinue = props.handleContinue;
    const handleBack = props.handleBack;
    return (
        < View style={styles.container} >
            <Text>Registration Third Step</Text>
            <View>
                <Text style={styles.Details}>Name: {props.value.firstName} {props.value.lastName}</Text>
            </View>
            <View>
                <Text style={styles.Details}>Email: {props.value.email}</Text>
            </View>
            <View>
                <Text style={styles.Details}>phone: {props.value.phone}</Text>
            </View>
            <View>
                <Text style={styles.Details}>Gender: {props.value.gender}</Text>
            </View>
            <View>
                <Text style={styles.Details}>Address: {props.value.address}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={{ marginBottom: '5px' }}>
                    <Button onPress={handleBack} title="Back" />
                </View>
                {/* <View>
                    <Button onPress={handleContinue} title="Continue" />
                </View> */}
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',

    },
    Details: {
        color: 'white',
    },
    buttons: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
})

export default RegistrationStepThird