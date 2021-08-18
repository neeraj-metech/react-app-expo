import React, { Component, useState } from 'react'
import { Text, Button, View, StyleSheet, TextInput } from 'react-native'
import RegistrationStepFirst from '../Registration/RegistrationStepFirst'
import RegistrationStepSecond from '../Registration/RegistrationStepSecond'
import RegistrationStepThird from '../Registration/RegistrationStepThird'

function Registration({ navigation }) {
    const [formData, setFormData] = useState({ 'step': 1, 'firstName': '', 'lastName': '', 'email': '', 'phone': '', 'gender': '', 'address': '' });
    const { step } = formData;
    const fieldValues = formData;
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
                    <RegistrationStepSecond
                        value={fieldValues}
                        handleChange={handleChange}
                        handleContinue={handleContinue}
                        handleBack={handleBack}

                    />
                </View >
            )
        case 3:
            return (
                < View style={styles.container} >
                    <RegistrationStepThird
                        value={fieldValues}
                        handleChange={handleChange}
                        handleContinue={handleContinue}
                        handleBack={handleBack}

                    />
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