import react, { Component } from 'react'
import { StyleSheet, Text, View, Buttonm, TextInput } from 'react-native';
import Tela from '../Telas/Tela'
import { DataBase } from '../../Database/Database';
import GreyButton from '../Buttons/GreyButton'
import GreenButton from '../Buttons/GreenButton'

export default class TelaConsultarSala extends Component {


    state = {
        classroom : -1,
        classroomName: '',
        classroomJSON: null,
    }
    
    changeClassoomStatus() {
        const __classroomJSON = DataBase.searchClassroom(this.state.classroomName)
        if (__classroomJSON == null) {
            this.setState({classroom : 0})
        }else {
            this.setState({classroom : 1})
        }
        this.setState({classroomJSON : __classroomJSON})
    }
    
    error() {
        if(this.state.classroom === 0){
            return (
                <View>
                    <Text style={styles.text}> NAO ENCONTROU A SALA </Text>
                </View>
            )
        }

        return null
    }

    renderClassroom() {
        if(this.state.classroom === 1){
            return (
                <View>
                    <Text style={styles.text}> ACHOU A SALA </Text>
                </View>
            )
        }

        return null
    }

    render () {

        return (
            <Tela name="Consultar Sala" returnBtn="true">
                <View style={styles.container}>
                    <Text style={styles.text}>Sala:</Text>
                    <View style={styles.rowView}>
                        <TextInput style={styles.input} placeholder="Digite o nome da sala..." onChangeText={classroomName => this.setState({ classroomName })} />
                        <GreenButton height="4.5%" width="10%" text="Consultar" onPress={() => this.changeClassoomStatus()} />
                    </View>
                    <View>
                        {this.error()}
                    </View>
                    <View>
                        {this.renderClassroom()}
                    </View>
                 </View>
            </Tela>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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