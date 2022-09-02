import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomTimer from '../components/CustomTimer'

const TimerScreen = () => {
  const [duration, setDuration] = useState();
  const [timer, setTimer] = useState();

  return (
    <View style={styles.container}>
      {/* <View>
      { timer.map((duration) => {
        <CustomTimer time={duration}/>
      })}
      </View> */}
      <CustomTimer time={duration}/>
      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={text => setDuration(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
    height: 50,
    width: '90%'
  },
})

export default TimerScreen