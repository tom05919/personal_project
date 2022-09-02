import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackgroundTimer from 'react-native-background-timer'

const TimerScreen = (props) => {
    const [remaindSec, setReminadSec] = useState(props.time);
    const [timerOn, setTimerOn] = useState(false);

    const startTimer = () => {
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
    },[remaindSec])

    const timeDisplay = () => {
    let hours = Math.floor(remaindSec / 60 / 60)
    let minutes = Math.floor(remaindSec / 60 - hours * 60)
    let seconds = Math.floor(remaindSec % 60)

    return{
      hours,
      minutes,
      seconds
    }
    }

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
        onPress={() => setReminadSec(props.time)}
      >
        <Text>Reset Timer</Text>
      </TouchableOpacity>
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
})

export default TimerScreen