import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackgroundTimer from 'react-native-background-timer'

const TimerScreen = () => {
  const [duration, setDuration] = useState();
  const [timer, setTimer] = useState();
  const [remaindSec, setReminadSec] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [durationHour, setDurationHour] = useState(0);
  const [durationMin, setDurationMin] = useState(0);
  const [durationSec, setDurationSec] = useState(0);
  let temp = ((durationHour*60*60)+(durationMin*60)+(durationSec*1))


  const startTimer = () => {
    setReminadSec(temp)
    console.log(temp)
    BackgroundTimer.runBackgroundTimer(() => { 
      setReminadSec(sec => {
        if (sec > 0) {
          return(sec - 1)
        } else {
          return(0)
        }
      });
    }, 1000);
  }

  useEffect(() => {
    if (timerOn) {
      startTimer();
    } else {
      BackgroundTimer.stopBackgroundTimer();
    }

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [timerOn]);

  useState(() => {
    if (remaindSec === 0) {
      setTimerOn(false);
      BackgroundTimer.stopBackgroundTimer();
    }
  },[remaindSec]);

  const timeDisplay = () => {
  let hours = Math.floor(remaindSec / 60 / 60)
  let minutes = Math.floor(remaindSec / 60 - hours * 60)
  let seconds = Math.floor(remaindSec % 60)

  return{
    hours,
    minutes,
    seconds
  }
  };

  return (
    <View style={styles.container}>
      <Text>{timeDisplay().hours} hours {timeDisplay().minutes} minutes {timeDisplay().seconds} seconds</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setTimerOn((current) => !current)}
      >
        <Text>{timerOn ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setReminadSec(temp)}
      >
        <Text>Reset Timer</Text>
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskContainer}
      >
        <TextInput
          style={styles.input}
          placeholder={'hours'}
          onChangeText={text => setDurationHour(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={'minutes'}
          onChangeText={text => setDurationMin(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={'seconds'}
          onChangeText={text => setDurationSec(text)}
        />
      </KeyboardAvoidingView>
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
    width: '30%',
    justifyContent: 'flex-end',
  },
  writeTaskContainer: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export default TimerScreen