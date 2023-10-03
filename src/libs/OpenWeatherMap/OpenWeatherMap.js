import axios from "axios";

const OpenWeatherMap = axios.create({ // create an instance of axios with a custom config
	baseURL: 'https://api.openweathermap.org/data/2.5',
	params: {
		units: 'metric',
		appid: process.env.REACT_APP_APPID,
	}
});

export default OpenWeatherMap;