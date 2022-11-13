import react, { Component } from 'react'
import TelaBase from './TelaBase'
import GreyButton from '../../Buttons/GreyButton'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function TelaAdministrador (props) {

       return (
           <TelaBase name="Menu Administrador" returnBtn={true} notificationBtn={true}>
               <View style={styles.container}>
                   <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Alterar permissões e informações de um usuário" onPress={() => alert('Ainda não implementado!')}/>
                   <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Log de eventos" onPress={() => alert('Ainda não implementado!')}/>
               </View>
           </TelaBase>
       );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        margin: 128
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    button: {
        marginBottom: 43,
    },

});