import react, { Component } from 'react'
import Tela from '../Telas/Tela';
import GreyButton from '../Buttons/GreyButton';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class MenuAdministrador extends Component {

    render() {

        return (
            <Tela name="Menu Administrador">
                <View style={styles.container}>
                    <GreyButton width={1300} height={80} buttonStyle={{marginBottom: 43}} text="Alterar permissões e informações de um usuário"/>
                    <GreyButton width={1300} height={80} buttonStyle={{marginBottom: 43}} text="Log de eventos"/>
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