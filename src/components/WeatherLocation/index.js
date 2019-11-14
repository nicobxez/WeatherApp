import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import { apiWeather } from './../../constants/apiWeather';
import Location from './Location';
import WeatherData from './WeatherData'; // WeatherData contains WeatherExtraInfo and WeatherTemperature
import './styles.css';

class WeatherLocation extends Component {

    constructor() { 
        super();
        this.state = {
            city: "Barcelona",
            data: null
        };
    };

    componentDidMount() {
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        
    }

    handleUpdateClick = () => { 
        fetch(apiWeather)
        .then( resolve => { return resolve.json() })
        .then( data => {
            const newWeather = transformWeather(data);
            this.setState({ data: newWeather });
        });
     };

    render() {
        const { city, data } = this.state;
        return (   
            <div className="weatherLocationCont">
             <Location city={ city }></Location>
             {data ? <WeatherData data={ data }></WeatherData> : "loading..."}
            </div>
        );
    };
};

export default WeatherLocation;