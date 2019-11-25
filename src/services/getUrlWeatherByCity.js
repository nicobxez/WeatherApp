import { apiEndpoint,apiKey } from './../constants/apiWeather';

const getUrlWeatherByCity = city => { return `${ apiEndpoint }?q=${ city }&APPID=${ apiKey }` };

export default getUrlWeatherByCity;