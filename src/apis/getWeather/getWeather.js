import OpenWeatherMap from "../../libs/OpenWeatherMap/OpenWeatherMap";

const getWeather = (id) => OpenWeatherMap.get('/weather', {
	params: {
		id,
	}
});

// const getWeather = (id) => axios.get('https://api.openweathermap.org/data/2.5/weather', {
//   params: {
//     id,
//     units: 'metric',
//     appid: '27a17450a2240295291924b6487c839b',
//   }
// })

export default getWeather;