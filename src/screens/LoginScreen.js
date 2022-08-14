import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/Logo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const eye = require('../../assets/images/eye.png')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            navigation.replace("Home");
        }
    })

    return unsubscribe
  }, [])

  const onLoginPressed = () => {    
    signInWithEmailAndPassword(auth, email, password)
        .then(userCerdentials => {
            const user = userCerdentials.user
            console.log(user.email)
        })
        .catch(error => alert(error.message))
  };

  const onMakeNewAcc = () => {
    navigation.navigate('SignUp')
  };

  // const onoLoginWithGoogle = () => {
  //   console.warn('sign in with google');
  //   signInWithRedirect(auth, provider);
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.33}]} resizeMode='contain'/>
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
          text='Login' 
          onPress={onLoginPressed} 
        />
        {/* <CustomButton 
          text='Login with Google' 
          onPress={onoLoginWithGoogle}
          frontColor='#27E63E'
          backColor='#C7F3CC'
        /> */}
        <CustomButton 
          text='Make a new account' 
          onPress={onMakeNewAcc} 
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
})

export default LoginScreen