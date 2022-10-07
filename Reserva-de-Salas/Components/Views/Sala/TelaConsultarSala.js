import { StyleSheet, Text, View, TextInput } from 'react-native';
import TelaBase from '../Gerais/TelaBase'
import GreenButton from '../../Buttons/GreenButton'
import { Component } from 'react';
import { DataBase } from '../../../Database/Database'

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
                <View style={styles.errorMessage}>
                    <Text style={styles.text}> Sala não encontrada! </Text>
                </View>
            )
        }

        return null
    }

    renderClassroom() {
        console.log(this.state.classroomJSON)
        if(this.state.classroom === 1){
            return (
                <View>
                    <View style={{flex: 2, backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%"}}>
                        <Text style={styles.text} >Sala: {this.state.classroomJSON.nome}</Text>
                        <Text style={styles.text} >Capacidade: {this.state.classroomJSON.capacidade}</Text>
                        <GreenButton buttonStyle={styles.editar} text="Editar" onPress={() => alert('Ainda não implementado!')} />
                    </View>
                    <View style={{backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%"}}>
                        <Text style={styles.text} >Centro: {this.state.classroomJSON.centro}</Text>
                    </View>
                    <View style={{backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%"}}>
                        <Text style={styles.text} >Equipamentos: {this.state.classroomJSON.estrutura + "."}</Text>
                    </View>
                    <View style={{backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%"}}>
                        <Text style={styles.text} >Localização: UEL</Text>
                    </View>
                </View>
            )
        }

        return null
    }

    render () {

        return (
            <TelaBase name="Consultar Sala" returnBtn="true" notificationBtn="true">
                <View style={styles.container}>
                    <Text style={styles.text}>Sala:</Text>
                    <View style={styles.rowView}>
                        <TextInput style={styles.input} placeholder="Digite o nome da sala..." onChangeText={classroomName => this.setState({ classroomName })} />
                        <GreenButton height="50%" width="20%" text="Consultar" onPress={() => this.changeClassoomStatus()} />
                    </View>
                    <View>
                        {this.error()}
                    </View>
                    <View>
                        {this.renderClassroom()}
                    </View>
                 </View>
            </TelaBase>
        )
    }
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
    },
    errorMessage: {
        backgroundColor: 'red',
        width: "63%",
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: "10%"
    },
    successMessage: {
        backgroundColor: 'green',
        width: "63%",
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: "10%"
    },
    editar: {
        width: "24%",
        height: "100%",
        textAlign: "center"
    }
});