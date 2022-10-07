import { Component } from 'react'

import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import { DataBase } from '../../../Database/Database'

import TelaBase from './TelaBase'

import GreyButton from '../../Buttons/GreyButton'


export default class TelaLogin extends Component {

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
        } else {
            Alert.alert('Usuário não encontrado')
            alert('Usuário não encontrado')
        }
    }

    render() {

        return (
            <TelaBase name="SISTEMA PARA RESERVA DE SALAS" returnBtn={false} notificationBtn={false}>
                <View style={styles.container}>
                    <Text style={styles.text}>Usuário:</Text>
                    <TextInput style={styles.input} placeholder="Digite seu usuário ou email..." onChangeText={login => this.setState({ login })} />
                    <Text style={styles.text}>Senha:</Text>
                    <TextInput secureTextEntry style={styles.input} placeholder="Digite sua senha aqui..." onChangeText={hash => this.setState({ hash })} />
                </View>
                <GreyButton text="Entrar" width={300} height={80} buttonStyle={{ position: 'relative' }} onPress={this.entrar} />
            </TelaBase>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: 725,
        height: 300,
        alignItems: 'left',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
    },
    input: {
        width: 725,
        height: 67,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10,
        padding: 10,
        fontSize: 24,
        fontWeight: 'normal',
        color: '#A1A1A1'
    },

});