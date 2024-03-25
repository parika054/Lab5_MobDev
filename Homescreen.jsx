/**
 * My To Do List App
 *
 * @format
 */
"use client";
import React from 'react';
import TodoList from '../Component/ToDoList.jsx';
import TodoForm from '../Component/ToDoForm.jsx';
import MainLayout from '../layouts/Mainlayout.jsx';
import {   SafeAreaView,StatusBar} from 'react-native';
import { Button } from 'react-native';
import { useState} from 'react';
function Home({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    const addTask = (task) => {
        for(let i=0;i<tasks.length;i++){
            if(tasks[i]===task){
                alert("Task Already Exists");
                return;
            }
        }
        setTasks([...tasks, task]);
    }
    return (
        <MainLayout>
        <SafeAreaView>
            <TodoList items={tasks}/>
            <TodoForm addTask={addTask}/>
            <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
            <StatusBar style="auto" />
        </SafeAreaView>
        </MainLayout>
    );
}



export default Home;