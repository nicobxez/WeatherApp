const location = "Buenos Aires,ar";
const apiKey = "7b4bbb8ce10cc628be67a5550da1fdcf";
const apiEndpoint = "http://api.openweathermap.org/data/2.5/weather";

export const apiWeather = `${ apiEndpoint }?q=${ location }&APPID=${ apiKey }`;