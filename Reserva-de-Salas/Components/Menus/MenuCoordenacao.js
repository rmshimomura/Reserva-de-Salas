import react from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MenuCoordenacao(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Menu Professor</Text>
            <Button title="Agendar Sala" onPress={ props.navigation.navigate('Agendar Sala')} />
            <Button title="Consultar Sala" onPress={ props.navigation.navigate('Consultar Sala')} />
            <Button title="Fazer requisição" onPress={ props.navigation.navigate('Fazer requisição')} />
            <Button title="Procurar um(a) professor(a)" onPress={ props.navigation.navigate('Procurar um(a) professor(a)')} />
            <Button title="Sair" onPress={() => props.navigation.navigate('Login')} />
        </View>
    )
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
});