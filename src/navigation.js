import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import TimerScreen from './screens/TimerScreen';
import FlashcardScreen from './screens/FlashcardScreen';
import homeIcon from '../assets/images/homeIcon.png';
import calendarIcon from '../assets/images/calendarIcon.png';
import timerIcon from '../assets/images/timerIcon.png';
import GameScreen from './screens/GameScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          tabBarIcon: () => (<Image source={homeIcon} style={styles.icon}/>)
        }}
      />
      <Tab.Screen 
        name='Calendar' 
        component={CalendarScreen}
        options={{
          tabBarIcon: () => (<Image source={calendarIcon} style={styles.icon}/>)
        }}
      />
      <Tab.Screen 
        name='Timer' 
        component={TimerScreen}
        options={{
          tabBarIcon: () => (<Image source={timerIcon} style={styles.icon}/>)
        }}
      />
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    maxWidth: 25,
    maxHeight: 25,
  },
})

export default Navigation