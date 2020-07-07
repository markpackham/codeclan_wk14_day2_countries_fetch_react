import React from 'react';
const CountrySelect = (props) => {

const optionsList = props.countries.map(country =>{
return <option value={country.alpha3Code} key={country.alpha3Code}>{country.name}</option>
});

  return (
    <select id="country-selector" defaultValue="default">
      <option disabled value="default">Choose a country...</option>
      {optionsList}
    </select>
  )
}
export default CountrySelect;