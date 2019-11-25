import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => { onSelectedLocation(city); }

    const strToComponent = cities => (
        cities.map( city => <WeatherLocation key={ city }  city={ city }
            onWeatherLocationClick={ () => handleWeatherLocationClick(city) }></WeatherLocation> )
    );

    return ( <div className="LocationList">{ strToComponent(cities) }</div> );
};

Location.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;