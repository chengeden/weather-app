import styled from "styled-components";
import WeatherIcon from "../../../WeatherIcon/WeatherIcon";
import Temperature from "../../../Temperature/Temperature";

const Wrapper = styled.div`
	text-align: center; 

	& ~ & {
		margin-left: 0.5rem;
	}
`;

const StyledWeatherIcon = styled(WeatherIcon)`
	height: 70px;
	width: 70px;
`;

const StyledTemperature = styled(Temperature)`
	font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.5);
`;

const DailyWeather = ({ day, weather, temperature }) => (
	<Wrapper>
		<div>{day}</div>
		<StyledWeatherIcon value={weather.icon} description={weather.description} />
		<div>
			<StyledTemperature value={temperature} />
		</div>
	</Wrapper>
);

export default DailyWeather;