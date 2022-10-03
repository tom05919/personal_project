import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value = {value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '65%',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginVertical: 11,
  }
})

export default CustomInput