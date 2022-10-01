import { React } from "react"
import { StyleSheet } from "react-native"

import './CustomButton'

const BACKGROUND = '#333333'
const FONT_SIZE = 20
const FONT_COLOR = '#FFFFFF'
const FONT_WEIGHT = 'bold'

const GreyButton = ({text, onPress, style, textStyle}) => (

    <CustomButton text={text} 
        onPress={onPress} 
        buttonStyle={[style, styles.greyButtonStyle]} 
        textStyle={textStyle} />
)

const styles = StyleSheet.create({

    greyButtonStyle: {
        backgroundColor: BACKGROUND,
        borderRadius: 10,
        padding: 10
    },
    greyButtonTextStyle: {
        fontSize: FONT_SIZE,
        color: FONT_COLOR,
        fontWeight: FONT_WEIGHT
    }
})

export default GreyButton