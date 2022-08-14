import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const signOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    });
  };
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <CustomButton text='Logout' onPress={signOut}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    balignItems: 'center',
    padding: 20,
  },
})


export default HomeScreen