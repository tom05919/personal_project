import { View, Text, StyleSheet, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';
import CustomTodo from '../components/CustomTodo';


const HomeScreen = () => {
  const navigation = useNavigation();
  const signOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    });
  };
  const [todo, setTodo] = useState();
  const [todoItems, setTodoItems] = useState([]);
  const handleAddTask = () => {
    if (todo) {
      Keyboard.dismiss();
      setTodoItems([...todoItems, todo]);
      setTodo(null);
    }
  }
  const completeTodo = (index) => {
    let todoCopy = [...todoItems];
    todoCopy.splice(index, 1);
    setTodoItems(todoCopy);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List:</Text>
      <View style={styles.body}>
        {
          todoItems.map((todo, index) => {
            return <CustomTodo key={index} text={todo} onPress={completeTodo}/>
          })
        }
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskContainer}
      >
        <TextInput
        placeholder={'Write something'}
        style={styles.input}
        value={todo}
        onChangeText={text => setTodo(text)}
        />
        <TouchableOpacity onPress={handleAddTask} >
          <View style={styles.add}>
            <Text style={styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* <CustomButton text='Logout' onPress={signOut}/> */}
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcecf3',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  writeTaskContainer: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
    width: '75%',
    height: 50,
  },
  add: {
    backgroundColor: 'white',
    width: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  addButton: {
    fontSize: 30,
  }
})


export default HomeScreen