import react, { Component } from 'react'

import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import { DataBase } from '../../Database/Database'

import Tela from '../Telas/Tela'

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
                        this.props.navigation.navigate('Menu aluno')
                        break;
                    case 1:
                        this.props.navigation.navigate('Menu professor')
                        break;
                    case 2:
                        this.props.navigation.navigate('Menu coordenador')
                        break;
                    case 3:
                        this.props.navigation.navigate('Menu secretaria')
                        break;
                    case 4:
                        this.props.navigation.navigate('Menu admin')
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
                <Tela name="LOGIN" returnBtn={true} notificationBtn={true}>
                    <View style={styles.container}>
                        <TextInput style={styles.input} placeholder="Login" onChangeText={login => this.setState({ login })} />
                        <TextInput secureTextEntry style={styles.input} placeholder="Senha" onChangeText={hash => this.setState({ hash })} />
                        <Button title="Entrar" onPress={this.entrar} />
                    </View>
                </Tela>
        );
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