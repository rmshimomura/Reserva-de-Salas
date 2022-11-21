import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, CheckBox, Button, TouchableOpacity } from 'react-native';
import TelaBase from '../Gerais/TelaBase'
import GreenButton from '../../Buttons/GreenButton'
import DropDownPicker from 'react-native-dropdown-picker'

const TelaEditarSala = ({renderClassroom, changeClassoomStatus, changeClassroomName, errorScreen}) => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]); //puxar essas constantes do banco de dados
    const [items2, setItems2] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]); //puxar essas constantes do banco de dados

    return (
        <TelaBase name="Editar Sala" returnBtn="true" notificationBtn="true">
        <View style={styles.rowView}>
            <View style={styles.container}>
                <Text style={styles.text}>Centro</Text>
                <View style={styles.dropdown}>
                    <DropDownPicker //drop down para selecionar o centro
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        />
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Departamento</Text>
                <View style={styles.dropdown}>
                    <DropDownPicker //drop down para selecionar o centro
                        open={open2}
                        value={value2}
                        items={items2}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems2}
                        />
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Capacidade</Text>
                <TextInput style={styles.input} placeholder="Capacidade" onChangeText={changeClassroomName} />
            </View>
        </View>
        <View style={styles.rowView}>
            <View style={styles.container2}>
                <Text style={styles.text}>Nome</Text>
                <TextInput style={styles.input} placeholder="Nome" onChangeText={changeClassroomName} />
            </View>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Acessibilidade</Text>
            <CheckBox
                value={isSelected2}
                onValueChange={setSelection2}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Televisão</Text>
            <CheckBox
                value={isSelected3}
                onValueChange={setSelection3}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Projetor</Text>
            <CheckBox
                value={isSelected4}
                onValueChange={setSelection4}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Computadores</Text>
        </View>
        <View style={styles.rowView}>
            <TouchableOpacity onPress={() => alert('Sala alterada!')} style={styles.button1}>
                <Text style={styles.text}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Sala removida!')} style={styles.button2}>
                <Text style={styles.text}>Remover</Text>
            </TouchableOpacity>
        </View>
        {/* <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}
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
        zIndex: -1,
    },
    checkbox: {
        zIndex: -1,
    },
    rowView: {
        flexDirection: "row",
        flex: 3,
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
        flex: 3,
        zIndex: 3,
        position: "relative", 
        top : 0,
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