import react, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TextInput, Picker} from 'react-native'
import { DataBase } from '../../Database/Database';
import Tela from './Tela';
import GreyButton from '../Buttons/GreyButton';

export default class CadastrarSala extends Component{

    state = {
        wasCreated: false,
        name: '',
        capacity: '',
        centro: '',
        depto: '',
        acess: [],
        tipo: '',
        est: [],
    }

    insertClassroomToDB() {
        DataBase.insertClassroom(this.state.centro, this.state.depto, this.state.capacity, this.state.name, this.state.acess, this.state.tipo, this.state.est)
        this.setState({wasCreated : true})
    }

    insertACK () {
        if (this.state.wasCreated === true) {
            return (
                <View style={{ flex: 1 }}>
                    <Text>
                        +++++
                    </Text>
                </View>
            )
        }
        return null
    }

    fetchDeptoList () {
        const center = DataBase.searchDepto(this.state.centro)
        if (center != null) {
            return center.departamentos.map((dept) => {
                return <Picker.Item label={dept} value={dept} />
            })
        }
        return <Picker.Item label={"Selecione um centro"} value={null} />
    }

    render() {
        return (
            <Tela name="CADASTRAR SALA" returnBtn={ true } notificationBtn={ true }>
                <View style={styles.rowStyle}>
                    <View style={styles.topSubdiv}>
                        <Text style={styles.text}>Centro:</Text>
                        <Picker id="PickerCentro"
                            selectedValue={this.state.centro}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({centro: itemValue})
                            }>
                            
                            <Picker.Item label="Selecione o centro" value="0" />
                            <Picker.Item label="CCH" value="CCH" />
                            <Picker.Item label="CCB" value="CCB" />
                            <Picker.Item label="CCE" value="CCE" />
                            <Picker.Item label="CESA" value="CESA" />
                            <Picker.Item label="CECA" value="CECA" />
                            <Picker.Item label="CCA" value="CCA" />
                            <Picker.Item label="CTU" value="CTU" />
                            <Picker.Item label="CEFE" value="CEFE" />
                        </Picker>                    
                    </View>
                    <View style={styles.topSubdiv}>
                        <Text style={styles.text}>Departamento:</Text>
                        <Picker>
                     
                            {this.fetchDeptoList()}
                        </Picker>                    
                    </View>
                    <View style={styles.topSubdiv}>
                        <Text style={styles.text}>Capacidade:</Text>
                        <TextInput style={styles.input} placeholder="Digite a capacidade" onChangeText={name => this.setState({ name })} />            
                    </View>
                </View>
        
                <Text style={styles.text}>Nome:</Text>
                <TextInput style={styles.input} placeholder="Digite o nome da sala..." onChangeText={name => this.setState({ name })} />            
                <View style={styles.rowStyle}>
                    <Picker>
                        <Picker.Item label="Escolha opções de acessibilidade" value="0" />
                        <Picker.Item label="elevador" value="elevador" />
                        <Picker.Item label="rampa de acesso" value="rampa de acesso" />
                    </Picker>
                    <Picker>
                        <Picker.Item label="Escolha o tipo de sala" value="0" />
                        <Picker.Item label="carteira" value="carteira" />
                        <Picker.Item label="mesa" value="mesa" />
                        <Picker.Item label="laboratório" value="laboratório" />
                        <Picker.Item label="auditório" value="auditório" />
                    </Picker>
                    <Picker>
                        <Picker.Item label="Escolha opções de estrutura" value="0" />
                        <Picker.Item label="projetor" value="projetor" />
                        <Picker.Item label="computador" value="computador" />
                        <Picker.Item label="película na janela" value="película na janela" />
                        <Picker.Item label="lousa branca" value="lousa branca" />
                    </Picker>
                </View>

                <View>
                    {this.insertACK()}
                </View>

                <GreyButton width={"20%"} height={"10%"} buttonStyle={{marginTop: 100}} text="Cadastrar" onPress={() => this.insertClassroomToDB()}/>
                
            </Tela>
        );
    }

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
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignContent:"left",
        width:"80%",
        height: 50,
        marginTop: '2%',
    },
    topSubdiv: {
        flex: 1,
        justifyContent: 'left'
    }

});
