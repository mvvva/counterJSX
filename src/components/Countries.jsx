import React, { useContext } from 'react';
import { CountriesContext } from './CountriesContext';

const Countries = () => {
  const countries = useContext(CountriesContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {countries.map(country => (
        <div key={country.cca3} className="text-center">
          <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-16 h-auto mx-auto" />
          <p className="mt-2 text-sm">{country.name.common}</p>
        </div>
      ))}
    </div>
  );
};

export default Countries;
