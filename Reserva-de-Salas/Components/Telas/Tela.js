import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const BACKGROUND = '#FFFFFF'
const TOPTAB_COLOR = '#82C57C'
const TEXT_COLOR = '#000000'
const FONT_SIZE = 40
const FONT_WEIGHT = 'regular'

function Tela(props) {

    const navigation = useNavigation();

    function returnBtn() {
        if(props.returnBtn == true){
            return (
                <TouchableHighlight style={styles.returnButton}
                    onPress={() => navigation.goBack()}>
                    <View style={{ flex: 1 }}>
                        <Text>
                            +
                        </Text>
                    </View>
                </TouchableHighlight>
            )
        }

        return null
    }

    function notificationBtn() {
        if(props.notificationBtn == true){
            return (
                <TouchableHighlight style={styles.returnButton}
                    onPress={() => alert('Notificações')}>
                    <View style={{ flex: 1 }}>
                        <Text>
                            -
                        </Text>
                    </View>
                </TouchableHighlight>
            )
        }

        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View>
                    {returnBtn()}
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>
                        {props.name}
                    </Text>
                </View>
                <View>
                    {notificationBtn()}
                </View>
            </View>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND,
        paddingTop: 38,
        justifyContent: 'start',
        alignItems: 'center'
    },
    topBar: {
        height: 100,
        padding: 8,
        flexDirection: 'row',
        width: 1300,
        backgroundColor: TOPTAB_COLOR,
        justifyContent: 'start',
        alignItems: 'center',
        borderRadius: 45,
    },
    text: {
        color: TEXT_COLOR,
        fontSize: FONT_SIZE,
        fontWeight: FONT_WEIGHT,
        alignSelf: 'center'
    },
    returnButton: {
        margin: 8,
        height: 30,
        width: 30,
        backgroundColor: '#ff0000'
    }
})

export default Tela