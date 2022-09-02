import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { useState } from 'react'
import CustomCalendar from '../components/CustomCalendar';

const CalendarScreen = () => {
  
  return (
    <View style={styles.container}>
      <CustomCalendar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default CalendarScreen