import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  // State for current task input and list of all tasks
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Load saved tasks from device storage when app starts
  useEffect(() => {
    loadTasks();
  }, []);

  // Load tasks from AsyncStorage
  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) setTasks(JSON.parse(savedTasks));
    } catch (error) {
      console.log('Error loading tasks:', error);
    }
  };

  // Save tasks to AsyncStorage for persistence
  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
      console.log('Tasks saved successfully. Active tasks:', newTasks.length);
    } catch (error) {
      console.log('Error saving tasks:', error);
    }
  };

  // Add new task to the list
  const addTask = () => {
    if (task.trim() !== '') {
      const newTasks = [...tasks, {
        key: Date.now().toString(), // Unique ID for each task
        text: task,
        completed: false
      }];
      setTasks(newTasks);
      setTask(''); // Clear input field
      saveTasks(newTasks);
    }
  };

  // Toggle task completion status (complete/incomplete)
  const toggleComplete = (taskKey) => {
    const updatedTasks = tasks.map(task =>
      task.key === taskKey
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Permanently delete a task from the list
  const deleteTask = (taskKey) => {
    const updatedTasks = tasks.filter(task => task.key !== taskKey);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Render individual task item with checkbox and delete button
  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      {/* Checkbox to mark task as complete */}
      <TouchableOpacity
        style={[styles.checkbox, item.completed && styles.checkboxCompleted]}
        onPress={() => toggleComplete(item.key)}
      >
        {item.completed && <Ionicons name="checkmark" size={16} color="#fff" />}
      </TouchableOpacity>

      {/* Task text with strikethrough if completed */}
      <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>
        {item.text}
      </Text>

      {/* Delete button */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.key)}
      >
        <Ionicons name="trash" size={24} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* List of all tasks */}
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        style={{ marginTop: 20, width: '100%' }}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks yet. Add one below!</Text>
        }
      />

      {/* Bottom input area for adding new tasks */}
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Ionicons name="add" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  // Bottom input and add button container
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  // Task input field
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  // Individual task item container
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    padding: 16,
    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  // Checkbox for task completion
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Completed checkbox style (green background)
  checkboxCompleted: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  // Task text
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  // Completed task text style (strikethrough)
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  // Delete button
  deleteButton: {
    marginLeft: 8,
    padding: 4,
  },
  // Add task button (blue circle)
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  // Empty state message
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 50,
  },
})