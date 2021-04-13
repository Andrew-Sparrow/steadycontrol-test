import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import {
  Container,
} from '@material-ui/core';

import AddNewTaskContainer from './components/AddNewTaskContainer';

import Header from './components/Header';
import Tasks from './components/Tasks';
import NoTasks from './components/NoTasks';
import Footer from './components/Footer';
import About from './components/About';

axios.defaults.baseURL = `${process.env.REACT_APP_API_PATH}:${process.env.REACT_APP_API_PORT}`;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.responseType = 'json';

window.addEventListener('online', () => {
  document.title = document.title.replace(' [offline]', '');
});

window.addEventListener('offline', () => {
  document.title += ' [offline]';
});

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_PATH}:${process.env.REACT_APP_API_PORT}/cities`);

    return response.data;
  };


  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);


  return (
    <Router>
      <Container
        component="div"
        maxWidth="sm"
        style={containerStyle}
      >
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddNewTaskContainer onAdd={addTask} />
              {tasks.length > 0
                ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggleCompleted={toggleCompleted}
                    editTaskText={editTaskText}
                  />
                )
                : <NoTasks />}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
