import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData'; // WeatherData contains WeatherExtraInfo and WeatherTemperature
import './styles.css';

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={'Barcelona'}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;