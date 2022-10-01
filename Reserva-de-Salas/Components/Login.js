import react, { Component } from 'react'
import TopBar from './Bars/TopBar';

import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class Login extends Component {
    state = {
        login: '',
        senha: ''
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <TextInput style={styles.input} placeholder="Login" onChangeText={login => this.setState({ login })} />
                <TextInput style={styles.input} placeholder="Senha" onChangeText={senha => this.setState({ senha })} />
                <Button title="Entrar" onPress={this.entrar} />
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
    }
});