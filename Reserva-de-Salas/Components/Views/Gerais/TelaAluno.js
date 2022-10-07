import { StyleSheet, Text, View, Button } from 'react-native';
import TelaBase from './TelaBase'
import GreyButton from '../../Buttons/GreyButton'

export default function TelaAluno(props) {

    return (
        <TelaBase name="Menu Aluno" returnBtn={true} notificationBtn={true}>
            <View style={styles.container}>
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Consultar Sala" onPress={() => props.navigation.navigate('Consultar Sala')} />
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Fazer Requisição" onPress={() => alert('Ainda não implementado!')} />
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Minhas Requisições" onPress={() => alert('Ainda não implementado!')} />
            </View>
        </TelaBase>
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