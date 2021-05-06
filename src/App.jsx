import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './App.css';
import {getStructure} from "./utils/utils";

import RecursiveTreeView from "./components/RecursiveTreeView";

window.addEventListener('online', () => {
  document.title = document.title.replace(' [offline]', '');
});

window.addEventListener('offline', () => {
  document.title += ' [offline]';
});

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
      setDataStructure(getStructure(citizensFromServer));
    };

    getCitizens();
  }, []);

  return (
    <>
      <RecursiveTreeView
        dataTree={dataStructure.structure}
        expandedItems={dataStructure.idList}
        citiesList={cities}
      />
    </>
  );
};

export default App;
