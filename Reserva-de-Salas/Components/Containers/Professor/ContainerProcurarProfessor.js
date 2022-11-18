import { StyleSheet, Text, View } from 'react-native';
import TelaProcurarProfessor from '../../Views/Professor/TelaProcurarProfessor'
import GreenButton from '../../Buttons/GreenButton'
import { Component } from 'react';
import { DataBase } from '../../../Database/Database'
import { DataTable } from 'react-native-paper';

export default class ContainerProcurarProfessor extends Component {

    state = {
        professor: -1,
        professorName: '',
        professorJSON: null,
    }

    changeProfessorName = (text) => {
        this.setState({ professorName: text })
    }

    changeProfessorStatus() {

        let _professorName = this.state.professorName.trim()
        _professorName = _professorName.toUpperCase()

        const __professorJSON = DataBase.searchTeacher(_professorName)
        if (__professorJSON == null) {
            this.setState({ professor: 0 })
        } else {
            this.setState({ professor: 1 })
        }
        this.setState({ professorJSON: __professorJSON })
    }

    getJson(json, dia, hora){
        try{
            return json[dia][hora]
        } catch (e){
            return ''
        }
    }

    error() {
        if (this.state.professor === 0) {
            return (
                <View style={styles.errorMessage}>
                    <Text style={styles.text}> Professor(a) não encontrado(a)! </Text>
                </View>
            )
        }

        return null
    }

    renderProfessor() {
        if (this.state.professor === 1) {
            return (
                <View>
                    <View style={{  backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "row", marginBottom: "4%" }}>
                        <Text style={styles.text} >Sala: {this.state.professorJSON.sala}</Text>
                        <Text style={styles.text} >Centro: {this.state.professorJSON.centro}</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', width: "90%", height: "10%", flexDirection: "column", marginBottom: "4%" }}>
                        <Text style={styles.text} >Disciplinas:</Text>

                        <DataTable>
                            <DataTable.Header style={{ alignItems: "center", justifyContent: "center" }}>
                                <DataTable.Title>  </DataTable.Title>
                                <DataTable.Title style={{alignItems: 'center'}}>SEG</DataTable.Title>
                                <DataTable.Title>TER</DataTable.Title>
                                <DataTable.Title>QUA</DataTable.Title>
                                <DataTable.Title>QUI</DataTable.Title>
                                <DataTable.Title>SEX</DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell>08:20 - 09:10</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'segunda_feira', '1')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'terca_feira', '1')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quarta_feira', '1')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quinta_feira', '1')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'sexta_feira', '1')}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>09:10 - 10:00</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'segunda_feira', '1')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'terca_feira', '1')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quarta_feira', '1')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quinta_feira', '1')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'sexta_feira', '1')}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>10:15 - 11:05</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'segunda_feira', '2')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'terca_feira', '2')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quarta_feira', '2')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quinta_feira', '2')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'sexta_feira', '2')}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>11:05 - 11:55</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'segunda_feira', '2')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'terca_feira', '2')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quarta_feira', '2')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quinta_feira', '2')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'sexta_feira', '2')}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>14:00 - 14:50</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'segunda_feira', '3')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'terca_feira', '3')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quarta_feira', '3')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quinta_feira', '3')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'sexta_feira', '3')}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>14:50 - 15:40</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'segunda_feira', '3')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'terca_feira', '3')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quarta_feira', '3')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quinta_feira', '3')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'sexta_feira', '3')}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>15:55 - 16:45</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'segunda_feira', '4')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'terca_feira', '4')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quarta_feira', '4')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quinta_feira', '4')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'sexta_feira', '4')}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>16:45 - 17:35</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'segunda_feira', '4')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'terca_feira', '4')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quarta_feira', '4')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'quinta_feira', '4')}</DataTable.Cell>
                                <DataTable.Cell>{this.getJson(this.state.professorJSON.disciplinas, 'sexta_feira', '4')}</DataTable.Cell>
                            </DataTable.Row>

                        </DataTable>
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
        alignItems: "center",
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