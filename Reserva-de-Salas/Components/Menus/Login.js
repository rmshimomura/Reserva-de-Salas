import react, { Component } from 'react'

import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import { DataBase } from '../../Database/Database'

export default class Login extends Component {

    state = {
        login: '',
        hash: ''
    }

    entrar = () => {

        let user = DataBase.searchUsername(this.state.login);

        if (user != null) {
            if (user.hash === this.state.hash) {
                switch (user.access) {
                    case 0:
                        console.log('Aluno');
                        // this.props.navigation.navigate('Menu aluno')
                        break;
                    case 1:
                        console.log('Professor');
                        // this.props.navigation.navigate('Menu professor')
                        break;
                    case 2:
                        console.log('Coordenador');
                        // this.props.navigation.navigate('Menu coordenador')
                        break;
                    case 3:
                        console.log('Secretaria');
                        // this.props.navigation.navigate('Menu secretaria')
                        break;
                    case 4:
                        console.log('Admin');
                        // this.props.navigation.navigate('Menu admin')
                        break;
                }
            } else {
                Alert.alert('Senha incorreta')
                alert('Senha incorreta')
            }
        }else {
            Alert.alert('Usuário não encontrado')
            alert('Usuário não encontrado')
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <TextInput style={styles.input} placeholder="Login" onChangeText={login => this.setState({ login })} />
                <TextInput style={styles.input} placeholder="Senha" onChangeText={hash => this.setState({ hash })} />
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