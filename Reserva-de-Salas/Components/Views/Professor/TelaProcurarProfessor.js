import { StyleSheet, Text, View, TextInput } from 'react-native';
import TelaBase from '../Gerais/TelaBase'
import GreenButton from '../../Buttons/GreenButton'

const TelaConsultarSala = ({renderClassroom, changeClassoomStatus, changeClassroomName, errorScreen}) => {
    
    return (
        <TelaBase name="Procurar um(a) Professor(a)" returnBtn="true" notificationBtn="true">
            <View style={styles.container}>
                <Text style={styles.text}>Sala:</Text>
                <View style={styles.rowView}>
                    <TextInput style={styles.input} placeholder="Digite o nome da sala..." onChangeText={(classroomName) => changeClassroomName(classroomName)} />
                    <GreenButton height="50%" width="20%" text="Consultar" onPress={() => changeClassoomStatus()} />
                </View>
                <View>
                    {errorScreen()}
                </View>
                <View>
                    {renderClassroom()}
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

export default TelaConsultarSala