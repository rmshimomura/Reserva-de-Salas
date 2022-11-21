import { React } from "react"
import { StyleSheet } from "react-native"

import CustomButton from './CustomButton'

const BACKGROUND = '#D9D9D9'
const FONT_SIZE = 20
const FONT_COLOR = '#000'
const FONT_WEIGHT = 'bold'

const GreyButton = ({text, onPress, buttonStyle, textStyle,
    width, height}) => (

    <CustomButton text={text} 
        onPress={onPress} 
        width={width}
        height={height}
        buttonStyle={[styles.greyButtonStyle, buttonStyle]} 
        textStyle={[styles.greyButtonTextStyle, textStyle]} />
)

const styles = StyleSheet.create({

    greyButtonStyle: {
        backgroundColor: BACKGROUND,
        borderRadius: 90,
        padding: 10
    },
    greyButtonTextStyle: {
        fontSize: FONT_SIZE,
        color: FONT_COLOR,
        fontWeight: FONT_WEIGHT
    }
})

export default GreyButton