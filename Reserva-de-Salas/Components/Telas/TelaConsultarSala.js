import react from 'react'
import { StyleSheet, Text, View, Buttonm, TextInput } from 'react-native';
import Tela from '../Telas/Tela'

import GreyButton from '../Buttons/GreyButton'
import GreenButton from '../Buttons/GreenButton'

export default function TelaConsultarSala(props) {

    return (
        <Tela name="Consultar Sala" returnBtn="true">
            <View style={styles.container}>
                <Text style={styles.text}>Sala:</Text>
                <View style={styles.rowView}>
                    <TextInput secureTextEntry style={styles.input} placeholder="Digite o nome da sala..." onChangeText={hash => this.setState({ hash })} />
                    <GreenButton height="4.5%" width="10%" text="Consultar" onPress={{/*props.navigation.navigate('Consultar Sala')*/ }} />
                </View>
                
             </View>
        </Tela>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'top',
        transform: [{ translateY: "5%" }],
        width: "90%",
    },
    rowView: {
        flex: 1,
        backgroundColor: '#fff',
        width: "90%",
        flexDirection: "row"
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: "10%"
    },
});