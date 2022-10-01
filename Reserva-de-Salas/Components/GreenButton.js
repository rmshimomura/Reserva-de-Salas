import { React } from "react"
import { View, StyleSheet } from "react-native"

import './CustomButton'

const BACKGROUND = '#00FF00'

const GreenButton = ({text, onPress, style, textStyle}) => (

    <CustomButton text={text} 
        onPress={onPress} 
        buttonStyle={[styles.greenButtonStyle, style]} 
        textStyle={textStyle} />
)

const styles = StyleSheet.create({

    greenButtonStyle: {
        backgroundColor: BACKGROUND,
        borderRadius: 10,
        padding: 10
    }
})

export default GreenButton