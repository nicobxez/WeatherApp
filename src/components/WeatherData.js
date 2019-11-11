import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={''}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={10}></WeatherExtraInfo>
    </div>
);

export default WeatherData;