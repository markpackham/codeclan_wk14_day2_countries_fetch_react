import React from 'react';
const CountrySelect = (props) => {

const optionsList = props.countries.map(country =>{
return <option value={country.alpha3Code} key={country.alpha3Code}>{country.name}</option>
});

function handleChange(event){
    //console.log(event.target.value);
    props.onCountrySelected(event.target.value);
}

  return (
    <select id="country-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a country...</option>
      {optionsList}
    </select>
  )
}
export default CountrySelect;