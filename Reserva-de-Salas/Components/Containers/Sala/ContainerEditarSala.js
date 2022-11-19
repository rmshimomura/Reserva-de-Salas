import { StyleSheet, Text, View } from 'react-native';
import TelaEditarSala from '../../Views/Sala/TelaEditarSala'
import GreenButton from '../../Buttons/GreenButton'
import { Component } from 'react';
import { DataBase } from '../../../Database/Database'

export default class ContainerEditarSala extends Component {

    render() {
        return (
            <TelaEditarSala changeClassroomName={(text) => this.changeClassroomName(text)} renderClassroom={() => this.renderClassroom()} errorScreen={() => this.error()} changeClassoomStatus={() => this.changeClassoomStatus()} />
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