import react from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Tela from '../Telas/Tela';
import GreyButton from '../Buttons/GreyButton';

export default function MenuAluno(props) {

    return (
        <Tela name="Menu Aluno" returnBtn={true} notificationBtn={true}>
            <View style={styles.container}>
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Consultar Sala" onPress={props.navigation.navigate('Consultar Sala')} />
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Fazer Requisição" onPress={props.navigation.navigate('Fazer Requisição')} />
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Minhas Requisições" onPress={props.navigation.navigate('Minhas Requisições')} />
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Sair" onPress={() => props.navigation.navigate('Login')} />
            </View>
        </Tela>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%"
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