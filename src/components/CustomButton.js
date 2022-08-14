import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = 'primary', backColor, frontColor}) => {
  return (
    <Pressable onPress={onPress} style={[
        styles.button, 
        styles[`button_${type}`],
        backColor ? {backgroundColor: backColor} : {}
        ]}> 
      <Text style={[
        styles[`text_${type}`],
        frontColor ? {color: frontColor} : {}
    ]}
        >
            {text}
        </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        marginTop: 20,
        width: '100%',
        borderRadius: 10,
        padding: 13,
        alignItems: 'center'
    },
    button_primary: {
        backgroundColor: '#346fed',
    },
    button_secondary: {

    },
    text_primary: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_secondary: {
        color: 'grey',
        fontWeight: 'bold',
    },

})

export default CustomButton