import { TextInput, StyleSheet, View } from 'react-native';
import React from 'react';

const Input = ({inputValue, inputChange, placeHolder}) => (
    <View style={styles.header}>
        <TextInput value={inputValue} onChangeText={inputChange} style={styles.input} placeholder={placeHolder} placeholderTextColor='#CACACA' /> 
    </View>
)

const styles = StyleSheet.create({
    input: {
        height: 60,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default Input;