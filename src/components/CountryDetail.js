import React from 'react';
const CountryDetail = ({selectedCountry}) => {

    // for when a country hans't been selected
    if(!selectedCountry) return null;

  return (
      // <> is like using fragments
      <>
    <h2>
      {selectedCountry.name}
    </h2>
    <h3>
        Region: {selectedCountry.region}
    </h3>
    <h4>
        Population: {selectedCountry.population}
    </h4>
    </>
  )

}
export default CountryDetail;