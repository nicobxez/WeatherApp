import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Mar del Plata,ar',
  'Buenos Aires,ar',
  'Santiago,cl',
  'Brasil,br',
  'Washington,us',
  'Madrid,es',
]

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation = ${city}`);
  };

  render() {
    return (
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={ this.handleSelectedLocation }></LocationList>
      </div>
    );
  }
}

export default App;