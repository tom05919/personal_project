import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Agenda } from 'react-native-calendars';
import React, { useState } from 'react'

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

const CalendarScreen = () => {
  const [items, setItems] = useState({})

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        //items[strTime] = "test"

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
            //this here is the stuff that push or render the actual takes or items yk, but onyl if there isn't any existing ones
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  }

  const renderItem = (item) => {

    return(
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.card}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={addItem}
        >
          <View style={styles.add}>
            <Text style={styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const addItem = () => {
    
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-09-16'}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  add: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  addButton: {
    fontSize: 30,
  },
  itemContainer: {
    flexDirection: 'row',
  }
})

export default CalendarScreen