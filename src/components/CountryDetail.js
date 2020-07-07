import React from 'react';
const CountryDetail = ({selectedCountry}) => {

    // for when a country hans't been selected
    if(!selectedCountry) return null;

  return (
    <h3>
      {selectedCountry.name}
    </h3>
  )

}
export default CountryDetail;