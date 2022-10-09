import { Component } from "react";
import { DataBase } from '../../../Database/Database';
import TelaCadastrarSala from "../../Views/Sala/TelaCadastrarSala";
import { Picker, View, Text } from 'react-native';

export default class ContainerCadastrarSala extends Component {

    state = {
        wasCreated: false,
        name: '',
        capacity: '',
        centro: '',
        depto: '',
        access: [],
        tipo: '',
        estrutura: [],
    }

    insertClassroomToDB() {
        DataBase.insertClassroom(this.state.centro, this.state.depto, this.state.capacity, this.state.name, this.state.access, this.state.tipo, this.state.estrutura)
        this.setState({wasCreated : true})
    }

    insertACK () {
        if (this.state.wasCreated === true) {
            return (
                <View style={{ flex: 1 }}>
                    <Text style={{marginTop:10}}>
                        Sala criada com sucesso!
                    </Text>
                </View>
            )
        }
        return null
    }

    fetchDeptoList () {
        const center = DataBase.searchDepto(this.state.centro)
        if (center != null) {
            return center.departamentos.map((dept, index) => {
                return <Picker.Item label={dept} value={dept} key={index+1}/>
            })
        }
        return <Picker.Item label={"Selecione um centro"} value={null} />
    }

    fetchAccessibilityList () {
        const acess = DataBase.searchAccessibility()
        if (acess != null) {
            let final_result = []
            final_result.push(<Picker.Item label={"Selecione um tipo de acessibilidade"} value={null} key={0} />)
            final_result.push(acess.map((acess, index) => {
                return <Picker.Item label={acess} value={acess} key={index+1}/>
            }
            ))
            final_result = final_result.flat()
            return final_result.map((item) => {
                return item
            })
        }
        return <Picker.Item label={"Selecione uma acessibilidade"} value={null} />
    }

    fetchStructureList () {
        const structure = DataBase.searchStructure()
        if (structure != null) {

            let final_result = []
            final_result.push(<Picker.Item label={"Selecione uma estrutura"} value={null} key={0} />)

            final_result.push(structure.map((structure, index) => {
                return <Picker.Item label={structure} value={structure} key={index+1}/>
            }))
            final_result = final_result.flat()
            return final_result.map((item) => {
                return item
            })

        }
        return <Picker.Item label={"Selecione uma estrutura"} value={null} />
    }

    fetchRoomTypeList () {
        const roomType = DataBase.searchRoomType()
        if (roomType != null) {
            let final_result = []
            final_result.push(<Picker.Item label={"Selecione um tipo de sala"} value={null} key={0} />)
            final_result.push(roomType.map((roomType, index) => {
                return <Picker.Item label={roomType} value={roomType} key={index+1}/>
            }
            ))
            final_result = final_result.flat()
            return final_result.map((item) => {
                return item
            })
        }
        return <Picker.Item label={"Selecione um tipo de sala"} value={null} />
    }

    fetchCentersList () {
        const centers = DataBase.searchAllDeptos()
        if (centers != null) {
            let final_result = []
            final_result.push(<Picker.Item label={"Selecione um centro"} value={null} key={0}/>)
            final_result.push(centers.map((center, index) => {
                return <Picker.Item label={center} value={center} key={index+1}/>
            }
            ))
            final_result = final_result.flat()
            
            return final_result.map((item) => {
                return item
            })
        }
        return <Picker.Item label={"Selecione um centro"} value={null} />
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
        this.setState({acess : value})
    }

    updateRoomType (value) {
        this.setState({tipo : value})
    }

    updateEstrutura (value) {
        this.setState({estrutura : value})
    }

    render() {

        return (
            <TelaCadastrarSala
                fetchCentersList= {() => this.fetchCentersList()}
                fetchRoomTypeList = {() => this.fetchRoomTypeList()}
                fetchStructureList = {() => this.fetchStructureList()}
                fetchAccessibilityList = {() => this.fetchAccessibilityList()}
                fetchDeptoList={() => this.fetchDeptoList()}
                insertACK={() => this.insertACK()}
                insertClassroomToDB={() => this.insertClassroomToDB()}
                updateCapacity={(capacity) => this.updateCapacity(capacity)}
                updateName={(name) => this.updateName(name)}
                updateCentro={(value) => this.updateCentro(value)}
                updateDepto={(value) => this.updateDepto(value)}
                updateAccess={(value) => this.updateAccess(value)}
                updateRoomType={(value) => this.updateRoomType(value)}
                updateStructure={(value) => this.updateEstrutura(value)}

            />
        )
    }

}