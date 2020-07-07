import React from 'react';
import CountrySelect from '../components/CountrySelect';
import CountryDetail from '../components/CountryDetail';
class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        countries: [],
        selectedCountryAlpha3Code: ''
    };
  }

componentDidMount(){
    const url = 'https://restcountries.eu/rest/v2/all';

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({countries: data}))

}

  render(){
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelect 
        countries={this.state.countries}
        />
        <CountryDetail />
      </div>
    );
  }
}
export default CountryContainer;