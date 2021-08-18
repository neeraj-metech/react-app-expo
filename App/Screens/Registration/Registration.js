import React, { Component, useState } from 'react'
import { Text, Button, View, StyleSheet, TextInput } from 'react-native'
import RegistrationStepFirst from '../Registration/RegistrationStepFirst'

function Registration({ navigation }) {
    const [formData, setFormData] = useState({ 'step': 1, 'firstName': '', 'lastName': '', 'email': '' });
    const { step, firstName, lastName, email } = formData;
    const fieldValues = { step, firstName, lastName, email }
    function handleChange(fieldName, text) {
        setFormData({ ...formData, [fieldName]: text })
    }
    const handleContinue = () => {
        setFormData({ ...formData, 'step': step + 1 })
        // console.log(formData);
    }
    const handleBack = () => {
        setFormData({ ...formData, 'step': step - 1 })
        // console.log(formData);
    }
    switch (step) {
        case 1:
            return (
                < View style={styles.container} >
                    <RegistrationStepFirst
                        value={fieldValues}
                        handleChange={handleChange}
                        handleContinue={handleContinue}
                        handleBack={handleBack}

                    />
                </View >
            )

        case 2:
            return (
                < View style={styles.container} >
                    <Text>Step 2</Text>
                    <View>
                        <Button onPress={handleBack} title="Back" />
                        <Button onPress={handleContinue} title="Continue" />
                    </View>
                </View >
            )
        case 3:
            return (
                < View style={styles.container} >
                    <Text>Step 3</Text>
                    <Button onPress={handleBack} title="Back" />
                    <Button onPress={handleContinue} title="Continue" />
                </View >
            )

    }

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
    }
})

export default Registration