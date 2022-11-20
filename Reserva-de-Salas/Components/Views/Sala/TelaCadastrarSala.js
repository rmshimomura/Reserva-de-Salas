import { View, Text, StyleSheet, TextInput, Picker } from 'react-native'
import TelaBase from '../Gerais/TelaBase';
import GreyButton from '../../Buttons/GreyButton'

const TelaCadastrarSala = ({fetchCentersList, fetchRoomTypeList, fetchStructureList, fetchAccessibilityList, fetchDeptoList, insertACK, insertClassroomToDB, updateCapacity, updateName, updateCentro, updateDepto, updateAccess, updateRoomType, updateStructure }) => {

    return (
        
        <TelaBase name="CADASTRAR SALA" returnBtn={true} notificationBtn={true}>
            <View style={styles.rowStyle}>
                <View style={styles.topSubdiv}>
                    <Text style={styles.text}>Centro:</Text>
                    <Picker onValueChange={(value) => updateCentro(value)}>
                        {fetchCentersList()}
                    </Picker>
                </View>
                <View style={styles.topSubdiv}>
                    <Text style={styles.text}>Departamento:</Text>
                    <Picker onValueChange={(value) => updateDepto(value)}>
                        {fetchDeptoList()}
                    </Picker>
                </View>
                <View style={styles.topSubdiv}>
                    <Text style={styles.text}>Capacidade:</Text>
                    <TextInput style={styles.input} placeholder="Digite a capacidade" onChangeText={(capacity) => updateCapacity(capacity)} />
                </View>
            </View>
            <Text style={styles.text}>Nome:</Text>
            <TextInput style={styles.input} placeholder="Digite o nome da sala..." onChangeText={(name) => updateName(name)} />
            <View style={styles.rowStyle}>
                <Picker onValueChange={(value) => updateAccess(value)}>
                    {fetchAccessibilityList()}
                </Picker>
                <Picker onValueChange={(value) => updateRoomType(value)}>
                    {fetchRoomTypeList()}
                </Picker>
                <Picker onValueChange={(value) => updateStructure(value)}>
                    {fetchStructureList()}
                </Picker>
            </View>
            <View>
                {insertACK()}
            </View>
            <GreyButton width={"20%"} height={"10%"} buttonStyle={{ marginTop: 100 }} text="Cadastrar" onPress={() => insertClassroomToDB()} />
        </TelaBase>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'left',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
        marginLeft: '20%',
        marginTop: '4%',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10,
    },
    rowStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "left",
        width: "80%",
        height: 50,
        marginTop: '2%',
    },
    topSubdiv: {
        flex: 1,
        justifyContent: 'left'
    }

});

export default TelaCadastrarSala;