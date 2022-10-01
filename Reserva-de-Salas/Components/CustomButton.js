import { React } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } 
    from 'react-native'

const CustomButton = ({text, onPress, buttonStyle, textStyle}) => (

    <TouchableOpacity style={buttonStyle} 
        onPress={onPress}>
        <View style={styles.container}>
            <Text style={textStyle}>
                {text}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CustomButton