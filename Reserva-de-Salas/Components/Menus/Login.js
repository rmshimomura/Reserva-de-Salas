import react, { Component } from 'react'

import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class Login extends Component {

    state = {
        login: '',
        senha: ''
    }

    entrar = () => {

        if (this.state.login == 'secretaria' && this.state.senha == '123') {
            this.props.navigation.navigate('Menu secretaria')
        } else if (this.state.login == 'professor' && this.state.senha == '123') {
            this.props.navigation.navigate('Menu professor')
        } else if (this.state.login == 'aluno' && this.state.senha == '123') {
            this.props.navigation.navigate('Menu aluno')
        } else if (this.state.login == 'coordenador' && this.state.senha == '123') {
            this.props.navigation.navigate('Menu coordenador')
        } else if (this.state.login == 'admin' && this.state.senha == 'admin') {
            this.props.navigation.navigate('Menu admin')
        } else {
            Alert.alert('Login ou senha incorretos')
            alert('Login ou senha incorretos')
        }
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
    },

});