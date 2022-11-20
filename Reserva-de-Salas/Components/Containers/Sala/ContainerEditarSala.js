import { StyleSheet, Text, View } from 'react-native';
import TelaEditarSala from '../../Views/Sala/TelaEditarSala'
import { Component } from 'react';
import { DataBase } from '../../../Database/Database'

export default class ContainerEditarSala extends Component {


    state = {
        name: window.nomeSala,
        capacity: DataBase.searchClassroom(window.nomeSala).capacidade,
        centro: DataBase.searchClassroom(window.nomeSala).centro,
        depto: DataBase.searchClassroom(window.nomeSala).departamento,
        access: false,
        tipo: '',
        televisao: false,
        projetor: false,
        computadores: false,
    }

    updateClassroomToDB() {

        let classroom = {
            centro: this.state.centro,
            departamento: this.state.depto,
            capacidade: this.state.capacity,
            nome: this.state.name,
            acessibilidade: [ ],
            tipo: this.state.tipo,
            estrutura: [ ]
        }

        if (this.state.televisao) {
            classroom.estrutura.push('televisao')
        }

        if (this.state.projetor) {
            classroom.estrutura.push('projetor')
        }

        if (this.state.computadores) {
            classroom.estrutura.push('computadores')
        }

        if (this.state.access) {
            classroom.acessibilidade =  ['Elevador', 'Rampa de acesso']
        }

        DataBase.updateClassroom(window.nomeSala, classroom)
        window.nomeSala = this.state.name
    }

    updateCapacity (capacity) {
        this.setState({capacity})
    }

    updateName (name) {
        this.setState({name})
    }

    updateCentro (value) {
        this.setState({centro : value})
    }

    updateDepto (value) {
        this.setState({depto : value})
    }

    updateAccess (value) {
        this.setState({access : value})
    }

    updateRoomType (value) {
        this.setState({tipo : value})
    }

    updateTelevisao (value) {
        this.setState({televisao : value})
    }

    updateProjetor (value) {
        this.setState({projetor : value})
    }

    updateComputadores (value) {
        this.setState({computadores : value})
    }

    getTelevisao () {
        return this.state.televisao
    }

    getProjetor () {
        return this.state.projetor
    }

    getComputadores () {
        return this.state.computadores
    }

    getAccess() {
        return this.state.access
    }

    fetchCentersList () {
        const centers = DataBase.searchAllCenters()
        var output = []
        if (centers != null) {
            centers.forEach((center) => {
                output.push({label: center, value: center})
            })
            return output
        }

        return [] 
    }

    fetchDepartmentsList () {
        const departments = DataBase.searchDepto(this.state.centro).departamentos
        var output = []
        if (departments != null) {
            departments.forEach((department) => {
                output.push({label: department, value: "_" + department})
            })
            return output
        }

        return []
    }

    removeClassroomToDB() {
        DataBase.removeClassroom(window.nomeSala)
        this.props.navigation.navigate('Menu secretaria')
    }

    render() {
        return (
            <TelaEditarSala 
                updateClassroomToDB={() => this.updateClassroomToDB()}
                updateCapacity={(capacity) => this.updateCapacity(capacity)}
                updateName={(name) => this.updateName(name)}
                updateCentro={(value) => this.updateCentro(value)}
                updateDepto={(value) => this.updateDepto(value)}
                updateAccess={(value) => this.updateAccess(value)}
                updateRoomType={(value) => this.updateRoomType(value)}
                updateTelevisao={(value) => this.updateTelevisao(value)}
                updateProjetor={(value) => this.updateProjetor(value)}
                updateComputadores={(value) => this.updateComputadores(value)}
                renderClassroom={() => this.renderClassroom()} errorScreen={() => this.error()}
                changeClassoomStatus={() => this.changeClassoomStatus()}
                getTelevisao={() => this.getTelevisao()}
                getProjetor={() => this.getProjetor()}
                getComputadores={() => this.getComputadores()}
                getAccess={() => this.getAccess()}
                fetchCentersList={() => this.fetchCentersList()}
                fetchDepartmentsList={() => this.fetchDepartmentsList()}
                removeClassroomToDB={() => this.removeClassroomToDB()}
                />
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