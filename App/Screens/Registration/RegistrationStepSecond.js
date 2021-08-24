import React from 'react'
import { Text, Button, View, StyleSheet, TextInput } from 'react-native'

function RegistrationStepSecond(props, { navigation }) {
    const { step, phone, gender, address } = props.value;
    const handleChange = props.handleChange;
    const handleContinue = props.handleContinue;
    const handleBack = props.handleBack;
    return (
        < View style={styles.container} >
            <Text>Registration Second Step</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => { handleChange('phone', text) }}
                keyboardType="numeric"
                maxLength={10}
                placeholder="Enter your phone number."
                value={phone}
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => { handleChange('gender', text) }}
                placeholder="Enter your gender."
                value={gender}
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => { handleChange('address', text) }}
                placeholder="Enter your address."
                value={address}
            />
            <View style={styles.buttons}>
                <Button style={{ marginBottom: '5px' }} onPress={handleBack} title="Back" />
                <Button onPress={handleContinue} title="Continue" />
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'white',
    },
    buttons: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
})

export default RegistrationStepSecond