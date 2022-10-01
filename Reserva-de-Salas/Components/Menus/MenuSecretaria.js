import react from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MenuSecretaria(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Menu Secretaria</Text>
            <Button title="Agendar Sala" onPress={() => props.navigation.navigate('Cadastrar professor')} />
            <Button title="Cadastrar Sala" onPress={() => props.navigation.navigate('Cadastrar aluno')} />
            <Button title="Consultar sala" onPress={() => props.navigation.navigate('Cadastrar sala')} />
            <Button title="Requisições pendentes" onPress={() => props.navigation.navigate('Cadastrar sala')} />
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
    }
});