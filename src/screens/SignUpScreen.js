import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../assets/images/Logo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const eye = require('../../assets/images/eye.png')
  const navigation = useNavigation();


  const onSignUpPressed = () => {
    console.warn('Sign Up');
    navigation.navigate('Home')
  };

  const onoLoginWithGoogle = () => {
    console.warn('sign in with google');
  };

  const onLoginPressed = () => {
    console.warn('log in');
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
          text='Login with Google' 
          onPress={onoLoginWithGoogle}
          frontColor='#27E63E'
          backColor='#C7F3CC'
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