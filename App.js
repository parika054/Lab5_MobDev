/**
 * My To Do List App
 *
 * @format
 */
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';

import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

const App = () => {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk the dog']);

    const addTaskS = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <View style={styles.container}>
            <ToDoList tasks={tasks} /> 
            <ToDoForm addTask={addTaskS} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 50,
    },
});


export default App;

