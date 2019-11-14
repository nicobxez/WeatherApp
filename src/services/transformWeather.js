import Convert from 'convert-units';
import { SUN } from './../constants/weather';

const getTemp = kelvin => { return Number(Convert(kelvin).from("K").to("C").toFixed(0)) }; // From Kelvin to Celsius and from decimal to integer

const getWeatherState = weather_data => { return SUN };

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        wind: `${ speed } m/s`,
        weatherState
    };

    return data;
};

export default transformWeather;