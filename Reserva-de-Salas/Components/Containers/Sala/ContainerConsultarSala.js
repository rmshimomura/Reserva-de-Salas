import { StyleSheet, Text, View } from 'react-native';
import TelaConsultarSala from '../../Views/Sala/TelaConsultarSala'
import GreenButton from '../../Buttons/GreenButton'
import { Component } from 'react';
import { DataBase } from '../../../Database/Database'

export default class ContainerConsultarSala extends Component {

    state = {
        classroom : -1,
        classroomName: '',
        classroomJSON: '',
    }

    changeClassroomName = (text) => {
        this.setState({classroomName: text})
    }

    changeClassoomStatus() {
        const __classroomJSON = DataBase.searchClassroom(this.state.classroomName)
        this.setState({classroom : 0})
        if (__classroomJSON != null) {
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
        if(this.state.classroom === 1){
            return (
                <View>
                    <View style={{flex: 2, backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%"}}>
                        <Text style={styles.text} >Sala: {this.state.classroomJSON.nome}</Text>
                        <Text style={styles.text} >Capacidade: {this.state.classroomJSON.capacidade}</Text>
                        <GreenButton buttonStyle={styles.editar} text="Editar" onPress={() => this.props.navigation.navigate('Editar Sala')} />
                    </View>
                    <View style={{backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%"}}>
                        <Text style={styles.text} >Centro: {this.state.classroomJSON.centro}</Text>
                    </View>
                    <View style={{backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%"}}>
                        <Text style={styles.text} >Equipamentos: {this.state.classroomJSON.estrutura}</Text>
                    </View>
                    <View style={{backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%"}}>
                        <Text style={styles.text} >Localização: UEL</Text>
                    </View>
                </View>
            )
        }

    }

    render() {
        return (
            <TelaConsultarSala changeClassroomName={(text) => this.changeClassroomName(text)} renderClassroom={() => this.renderClassroom()} errorScreen={() => this.error()} changeClassoomStatus={() => this.changeClassoomStatus()} />
        )
    }

}

const styles = StyleSheet.create({
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
})