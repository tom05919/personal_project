import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Delete from '../../assets/images/delete.png'

const CustomTodo = (props) => {

  return (
      <View style={styles.container}>
        <View style={styles.todoLeft}>
          <TouchableOpacity 
          style={styles.check}
          onPress={props.onPress}
          />
          <Text style={styles.todoText}>{props.text}</Text>
        </View>
        {/* <TouchableOpacity 
        style={styles.deleteTodo}
        onPress={props.onPress}
        >
          <Image source={Delete} style={styles.delete}/>
        </TouchableOpacity> */}
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#b9d9e7',
    padding: 15,
    marginBottom: 3,
    alignItems: 'center'
  },
  todoLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  check: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    marginRight: 12,
    borderRadius: 5
  },
  todoText: {
    maxWidth: '80%',
    fontSize: 21,
  },
  deleteTodo: {
    width: 15,
    height: 15,
  },
  delete: {
    width: 15,
    height: 15,
  }

})

export default CustomTodo