import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

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
  const [cities, setCities] = useState([]);
  const [citizens, setCitizens] = useState([]);

  const fetchCities = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_PATH}:${process.env.REACT_APP_API_PORT}/cities`);

    return response.data;
  };

  const fetchCitizens = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_PATH}:${process.env.REACT_APP_API_PORT}/citizens`);

    return response.data;
  };

  useEffect(() => {
    const getCities = async () => {
      const citiesFromServer = await fetchCities();
      setCities(citiesFromServer);
    };

    getCities();
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
              {cities.length > 0
                ? (
                  <Tasks
                    tasks={cities}
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
