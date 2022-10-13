import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed'
  },
});

export default App;