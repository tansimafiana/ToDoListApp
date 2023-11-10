// ToDoList.jsx

import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, StyleSheet } from 'react-native';

class ToDoList extends React.Component {
  render() {
    return (
      <ScrollView>
        <TouchableOpacity>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do laundry</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to gym</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Walk dog</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
