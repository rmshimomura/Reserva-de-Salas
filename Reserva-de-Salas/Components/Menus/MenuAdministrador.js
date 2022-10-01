import react, { Component } from 'react'

import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class MenuAdministrador extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>MENU ADMINISTRADOR</Text>
                <Button title="Alterar permissões e informações de um usuário"/>
                <Button title="Log de eventos"/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10
    },

});