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

    this.handleCountrySelected = this.handleCountrySelected.bind(this);
  }

componentDidMount(){
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({countries: data}))
}

handleCountrySelected(alpha3Code){
    this.setState({selectedCountryAlpha3Code: alpha3Code});
}

  render(){
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelect 
        countries={this.state.countries}
        onCountrySelected = {this.handleCountrySelected}
        />
        <CountryDetail />
      </div>
    );
  }
}
export default CountryContainer;