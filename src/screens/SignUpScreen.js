import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { auth, analytics } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            navigation.replace("Home");
        }
    })

    return unsubscribe
  }, [])


  const onSignUpPressed = () => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCerdentials => {
            const user = userCerdentials.user
            console.log(user.email)
        })
        .catch(error => alert(error.message))

    navigation.navigate('Home')
  };

  const onoLoginWithGoogle = () => {
    console.warn('sign in with google');
    //firbase stuff
  };

  const onLoginPressed = () => {
    navigation.navigate('Login')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput 
          placeholder="Email" 
          value={email} 
          setValue={setEmail}
        />
        <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton 
          text='Sign Up' 
          onPress={onSignUpPressed} 
        />
        <CustomButton 
          text='Already have an account? Login' 
          onPress={onLoginPressed} 
          type='secondary'
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 300,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'grey',
    padding: 10,
  }
})

export default LoginScreen