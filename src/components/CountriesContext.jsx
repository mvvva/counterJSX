import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <CountriesContext.Provider value={countries}>
      {children}
    </CountriesContext.Provider>
  );
};
