import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto'

const BACKGROUND = '#FFFFFF'
const TOPTAB_COLOR = '#82C57C'
const TEXT_COLOR = '#000000'
const FONT_SIZE = 40
const FONT_WEIGHT = 'regular'

const ReturnButton = (display) => {

    const navigation = useNavigation();

    return display.display ? (
            <TouchableHighlight style={styles.returnButton}
                onPress={() => navigation.goBack()}>
                <View style={styles.iconContainer}>
                    <Icon name='arrow-left-l' 
                        size={50} 
                        color={'black'} />
                </View>
            </TouchableHighlight>
        )
    : null
}

const NotificationButton = (display) => {
    
    return display.display ? (
        <TouchableHighlight style={styles.notificationsButton}
            onPress={() => {}}>
            <View style={styles.iconContainer}>
                <Icon name='bell-alt' 
                    size={50} 
                    color={'goldenrod'} />
            </View>
        </TouchableHighlight>
    )
    : null
}

const TelaBase = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View>
                    <ReturnButton 
                        display={props.returnBtn}/>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>
                        {props.name}
                    </Text>
                </View>
                <View>
                    <NotificationButton 
                        display={props.notificationBtn}/>
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
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0}
    },
    text: {
        color: TEXT_COLOR,
        fontSize: FONT_SIZE,
        fontWeight: FONT_WEIGHT,
        alignSelf: 'center'
    },
    returnButton: {
        margin: 25,
        height: 70,
        width: 70,
        backgroundColor: 'transparent',
        underlayColor: '#fff',
        borderRadius: 10,
        activeOpacity: 0.5,
        borderColor: '#000',
        borderWidth: 1,
        alignSelf: 'center',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0}
    },
    notificationsButton: {
        margin: 25,
        height: 70,
        width: 70,
        backgroundColor: '#cccccc',
        underlayColor: '#fff',
        borderRadius: 10,
        activeOpacity: 0.5,
        borderColor: '#000',
        borderWidth: 1,
        alignSelf: 'center',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0}
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TelaBase