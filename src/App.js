import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Header from './components/Header'
import TaskListContextProvider from './context/TaskLIstContext';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
          <TaskForm/>
          <TaskList />
        </div>
      </div>
    </div>
  </TaskListContextProvider>
            
  );
};

export default App;
