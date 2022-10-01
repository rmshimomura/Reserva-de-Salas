import react from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MenuAluno(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Menu Aluno</Text>
            <Button title="Consultar Sala" onPress={this.props.navigation.navigate('Consultar Sala')} />
            <Button title="Fazer Requisição" onPress={this.props.navigation.navigate('Fazer Requisição')} />
            <Button title="Minhas Requisições" onPress={this.props.navigation.navigate('Minhas Requisições')} />
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