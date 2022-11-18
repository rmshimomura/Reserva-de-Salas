import { StyleSheet, Text, View } from 'react-native';
import TelaProcurarProfessor from '../../Views/Professor/TelaProcurarProfessor'
import GreenButton from '../../Buttons/GreenButton'
import { Component } from 'react';
import { DataBase } from '../../../Database/Database'

export default class ContainerProcurarProfessor extends Component {

    state = {
        professor : -1,
        professorName: '',
        professorJSON: null,
    }

    changeProfessorName = (text) => {
        this.setState({professorName: text})
    }
    
    changeProfessorStatus() {
        const __professorJSON = DataBase.searchTeacher(this.state.professorName)
        if (__professorJSON == null) {
            this.setState({professor : 0})
        }else {
            this.setState({professor : 1})
        }
        this.setState({professorJSON : __professorJSON})
    }

    error() {
        if(this.state.professor === 0){
            return (
                <View style={styles.errorMessage}>
                    <Text style={styles.text}> Professor(a) não encontrado(a)! </Text>
                </View>
            )
        }

        return null
    }

    renderProfessor() {
        if(this.state.professor === 1){
            return (
                <View>
                    <View style={{flex: 2, backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%"}}>
                        <Text style={styles.text} >Sala: {this.state.professorJSON.sala}</Text>
                        <Text style={styles.text} >Centro: {this.state.professorJSON.centro}</Text>
                    </View>
                    <View style={{backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%"}}>
                        <Text style={styles.text} >Disciplinas:</Text>
                    </View>
                </View>
            )
        }

    }

    render() {
        return (
            <TelaProcurarProfessor changeProfessorName={(text) => this.changeProfessorName(text)} renderProfessor={() => this.renderProfessor()} errorScreen={() => this.error()} changeProfessorStatus={() => this.changeProfessorStatus()} />
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