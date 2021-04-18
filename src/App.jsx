import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './App.css';
import {createStructure} from "./utils/utils";
import RecursiveTreeView from "./components/RecursiveTreeView"

const data = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};

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

  useEffect(() => {
    const getCities = async () => {
      const citiesFromServer = await fetchCities();
      setCities(citiesFromServer);
    };

    getCities();
  }, []);

  const fetchCitizens = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_PATH}:${process.env.REACT_APP_API_PORT}/citizens`);

    return response.data;
  };

  useEffect(() => {
    const getCitizens = async () => {
      const citizensFromServer = await fetchCitizens();
      setCitizens(citizensFromServer);

      console.log(createStructure(citizensFromServer));
    };

    getCitizens();
  }, []);


  return (
    <>
      <RecursiveTreeView data={data}/>
    </>
  );
};

export default App;
