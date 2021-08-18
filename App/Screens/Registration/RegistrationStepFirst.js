import React from 'react'
import { Text, Button, View, StyleSheet, TextInput } from 'react-native'

function RegistrationStepFirst(props, { navigation }) {
    const { step, firstName, lastName, email } = props.value;
    const handleChange = props.handleChange;
    const handleContinue = props.handleContinue;
    const handleBack = props.handleBack;
    return (
        < View style={styles.container} >
            <Text>Registration First Step</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => { handleChange('firstName', text) }}
                placeholder="Enter your first name."
                value={firstName}
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => { handleChange('lastName', text) }}
                placeholder="Enter your last name."
                value={lastName}
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => { handleChange('email', text) }}
                placeholder="Enter your email."
                value={email}
            />
            <Button onPress={handleContinue} title="Continue" />
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
    }
})

export default RegistrationStepFirst