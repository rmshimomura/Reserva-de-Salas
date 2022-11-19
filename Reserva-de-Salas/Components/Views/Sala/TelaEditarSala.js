import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, CheckBox } from 'react-native';
import TelaBase from '../Gerais/TelaBase'
import GreenButton from '../../Buttons/GreenButton'
import DropDownPicker from 'react-native-dropdown-picker'

const TelaEditarSala = ({renderClassroom, changeClassoomStatus, changeClassroomName, errorScreen}) => {
    const [isSelected, setSelection] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

    return (
        <View style={styles.container}>
      <View style={styles.checkboxContainer}>
      <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
    </View>
    );
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
    }
});

export default TelaEditarSala