import { React } from "react"
import { StyleSheet } from "react-native"

import CustomButton from './CustomButton'

const BACKGROUND = '#82C57C'
const FONT_SIZE = 20
const FONT_COLOR = '#000000'
const FONT_WEIGHT = 'bold'

const GreenButton = ({text, onPress, buttonStyle, textStyle,
    width, height}) => (

    <CustomButton text={text} 
        onPress={onPress} 
        width={width}
        height={height}
        buttonStyle={[styles.greenButtonStyle, buttonStyle]} 
        textStyle={[styles.greenButtonTextStyle, textStyle]} />
)

const styles = StyleSheet.create({

    greenButtonStyle: {
        backgroundColor: BACKGROUND,
        borderRadius: 0,
        padding: 10
    },
    greenButtonTextStyle: {
        fontSize: FONT_SIZE,
        color: FONT_COLOR,
        fontWeight: FONT_WEIGHT
    }
})

export default GreenButton