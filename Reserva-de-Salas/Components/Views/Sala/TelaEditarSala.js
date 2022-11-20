import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, CheckBox, TouchableOpacity } from 'react-native';
import TelaBase from '../Gerais/TelaBase'
import DropDownPicker from 'react-native-dropdown-picker'
import { DataBase } from "../../../Database/Database";

const TelaEditarSala = ({ updateCapacity, updateName, updateCentro, updateDepto, updateAccess, updateTelevisao, updateProjetor, updateComputadores, getTelevisao, getProjetor, getComputadores, getAccess, updateClassroomToDB, fetchCentersList, fetchDepartmentsList, removeClassroomToDB}) => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const [items, setItems] = useState(fetchCentersList ());
    const [items2, setItems2] = useState(fetchDepartmentsList());

    return (
        <TelaBase name="Editar Sala" returnBtn="true" notificationBtn="true">
        <View style={styles.rowView}>
            <View style={styles.container}>
                <Text style={styles.text}>Centro</Text>
                <View style={styles.dropdown}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        onChangeValue={(value) => updateCentro(value)}
                        />
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Departamento</Text>
                <View style={styles.dropdown}>
                    <DropDownPicker
                        open={open2}
                        value={value2}
                        items={fetchDepartmentsList()}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems2}
                        onChangeValue={(value) => updateDepto(value)}
                        />
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Capacidade</Text>
                <TextInput style={styles.input} placeholder={DataBase.searchClassroom(window.nomeSala) ? DataBase.searchClassroom(window.nomeSala).capacidade : ""} onChangeText={(capacity) => updateCapacity(capacity)} />
            </View>
        </View>
        <View style={styles.rowView}>
            <View style={styles.container2}>
                <Text style={styles.text}>Nome</Text>
                {/* inicia com window.nomeSala */}
                <TextInput style={styles.input}  placeholder={window.nomeSala} onChangeText={ (name) => updateName(name)} ></TextInput>
            </View>
            <CheckBox
                value={getAccess()}
                onValueChange={( newValue ) => updateAccess( newValue )}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Acessibilidade</Text>
            <CheckBox
                value={getTelevisao()}
                onValueChange={( newValue ) => updateTelevisao( newValue )}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Televisão</Text>
            <CheckBox
                value={getProjetor()}
                onValueChange={ ( newValue ) => updateProjetor( newValue )}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Projetor</Text>
            <CheckBox
                value={ getComputadores() }
                onValueChange={ ( newValue ) => updateComputadores( newValue )}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Computadores</Text>
        </View>
        <View style={styles.rowView}>
            <TouchableOpacity onPress={( ) => updateClassroomToDB()} style={styles.button1}>
                <Text style={styles.text}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeClassroomToDB()} style={styles.button2}>
                <Text style={styles.text}>Remover</Text>
            </TouchableOpacity>
        </View>
    </TelaBase>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'flex-start',
        transform: [{ translateY: "5%" }],
        width: 400,
        height: 200,
    },
    container2: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'flex-start',
        marginRight: 100,
    },
    rowView: {
        flexDirection: "row",
    },
    text: {
        fontSize: 30,
        marginBottom: 10,
        marginRight: "10%",
        width: "70%",
    },
    input: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: "10%",
    },
    dropdown: {
        width: "70%",
        height: "100%",
        marginRight: "17%",
    },
    label: {
        fontSize: 15,
        marginRight: 101,
    },
    button1: {
        width: 200,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'yellow',
        alignItems: 'center',
        marginLeft: 800,
    },
    button2: {
        width: 200,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        marginLeft: 20,
    },
});

export default TelaEditarSala