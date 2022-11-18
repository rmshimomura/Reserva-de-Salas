import { StyleSheet, Text, View, TextInput } from 'react-native';
import TelaBase from '../Gerais/TelaBase'
import GreenButton from '../../Buttons/GreenButton'

const TelaProcurarProfessor = ({renderProfessor, changeProfessorStatus, changeProfessorName, errorScreen}) => {
    
    return (
        <TelaBase name="Procurar um(a) Professor(a)" returnBtn="true" notificationBtn="true">
            <View style={styles.container}>
                <Text style={styles.text}>Professor:</Text>
                <View style={styles.rowView}>
                    <TextInput style={styles.input} placeholder="Digite o nome do professor..." onChangeText={(classroomName) => changeProfessorName(classroomName)} />
                    <GreenButton height="50%" width="20%" text="Consultar" onPress={() => changeProfessorStatus()} />
                </View>
                <View>
                    {errorScreen()}
                </View>
                <View>
                    {renderProfessor()}
                </View>
            </View>
        </TelaBase>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'top',
        transform: [{ translateY: "5%" }],
        width: "90%",
        height: "10%"
    },
    rowView: {
        backgroundColor: '#fff',
        width: "90%",
        height: "10%",
        flexDirection: "row",
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginRight: "10%",
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: "10%"
    }
});

export default TelaProcurarProfessor