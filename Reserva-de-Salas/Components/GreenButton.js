import { React } from "react"
import { StyleSheet } from "react-native"

import './CustomButton'

const BACKGROUND = '#00FF00'
const FONT_SIZE = 20
const FONT_COLOR = '#FFFFFF'
const FONT_WEIGHT = 'bold'

const GreenButton = ({text, onPress, style, textStyle}) => (

    <CustomButton text={text} 
        onPress={onPress} 
        buttonStyle={[style, styles.greenButtonStyle]} 
        textStyle={textStyle} />
)

const styles = StyleSheet.create({

    greenButtonStyle: {
        backgroundColor: BACKGROUND,
        borderRadius: 10,
        padding: 10
    },
    greenButtonTextStyle: {
        fontSize: FONT_SIZE,
        color: FONT_COLOR,
        fontWeight: FONT_WEIGHT
    }
})

export default GreenButton