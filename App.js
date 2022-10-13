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

const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
return (
  <FlashcardList flashcards={flashcards} />
);


const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 +2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5',
    ]
  },

  {
    id: 2,
    question: 'Question 2?',
    answer: 'Answer',
    options: [
      'Ans 1',
      'Ans 2',
      'Ans 3',
      'Ans 4',
    ]
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed'
  },
});

export default App;

