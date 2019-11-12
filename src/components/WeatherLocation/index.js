import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData'; // WeatherData contains WeatherExtraInfo and WeatherTemperature
import './styles.css';
import {SUN, WINDY} from '../../constants/weather';

const data = {
    temperature: 18,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = { // setState Test
    temperature: 10,
    weatherState: WINDY,
    humidity: 80,
    wind: '40 m/s'
}


class WeatherLocation extends Component {

    constructor() { 
        super();
        this.state = {
            city: "Barcelona",
            data: data,
        };
    }

    handleUpdateClick = () => { 
        this.setState({
            data: data2,
        });
     }

    render() {
        const { city, data } = this.state;
        return (   
            <div className="weatherLocationCont">
             <Location city={city}></Location>
             <WeatherData data={data}></WeatherData>
             <button onClick={this.handleUpdateClick}>Reload</button>
            </div>
        )
    }
}

export default WeatherLocation;