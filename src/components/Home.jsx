import React from 'react';
import { CountriesProvider } from './CountriesContext';
import Countries from './Countries';

const Home = () => {
  return (
    <CountriesProvider>
      <div className="App">
        <Countries />
      </div>
    </CountriesProvider>
  );
};
export default Home