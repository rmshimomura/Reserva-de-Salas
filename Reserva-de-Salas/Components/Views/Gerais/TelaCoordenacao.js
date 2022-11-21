import { StyleSheet, View } from 'react-native';
import TelaBase from './TelaBase'

import GreyButton from '../../Buttons/GreyButton'

export default function TelaCoordenacao(props) {

    return (
        <TelaBase name="Menu coordenação" returnBtn={true} notificationBtn={true}>
            <View style={styles.container}>
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Agendar Sala" onPress={() => alert('Ainda não implementado!')} />
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Consultar Sala" onPress={() => props.navigation.navigate('Consultar Sala')} />
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Fazer requisição" onPress={() => alert('Ainda não implementado!')} />
                <GreyButton buttonStyle={styles.button} height="80" width="100%" text="Procurar um(a) professor(a)" onPress={() => props.navigation.navigate('Procurar Professor')} />
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