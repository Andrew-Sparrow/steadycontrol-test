import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './App.css';
import {createStructure} from "./utils/utils";

import RecursiveTreeView from "./components/RecursiveTreeView";

window.addEventListener('online', () => {
  document.title = document.title.replace(' [offline]', '');
});

window.addEventListener('offline', () => {
  document.title += ' [offline]';
});

const data = [
  {
    id: '1',
    name: 'Child - 1',
    children: [
      {
        id: '2',
        name: 'Child - 2',
        children: []
      },
      {
        id: '3',
        name: 'Child - 3',
        children: [
          {
            id: '4',
            name: 'Child - 4',
            children: [],
          },
        ],
      },
    ]
  },
  {
    id: '5',
    name: 'Child - 5',
    children: [
      {
        id: '6',
        name: 'Child - 6',
        children: [],
      },
      {
        id: '7',
        name: 'Child - 7',
        children: [
          {
            id: '8',
            name: 'Child - 8',
            children: [],
          },
          {
            id: '9',
            name: 'Child - 9',
            children: [],
          },
          {
            id: '10',
            name: 'Child - 10',
            children: [],
          },
        ],
      },
    ],
  }
];

const App = () => {
  const [cities, setCities] = useState([]);
  const [citizens, setCitizens] = useState([]);
  const [dataStructure, setDataStructure] = useState([]);

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
      setDataStructure(createStructure(citizensFromServer));
    };

    getCitizens();
  }, []);

  return (
    <>
      <RecursiveTreeView dataTree={dataStructure.structure} expandedItem={dataStructure.idList}/>
    </>
  );
};

export default App;
