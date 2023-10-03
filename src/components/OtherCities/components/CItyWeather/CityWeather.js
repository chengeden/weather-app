import styled from "styled-components";
import Temperature from "../../../Temperature/Temperature";
import WeatherIcon from "../../../WeatherIcon/WeatherIcon";

const Wrapper = styled.button`
	border: 0;
	padding: 0;
	margin: 0;
	outline: 0;
	font-size: 1rem;
	text-align: left;
	background-color: transparent;
	cursor: pointer;
	display: flex;
	align-items: center;
	border-bottom: 2px solid transparent; /* avoid position change due to add border-bottom when hover*/

	&:hover {
		border-bottom: 2px solid rgba(0, 0, 0, 0.1);
	}
`;

const CityName = styled.div`
	width: 100px;
	letter-spacing: 1px;
	margin-right: 1rem;
`;

const StyledTemperature = styled(Temperature)`
	width: 4rem;
	font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.5);
`;

const StyledWeatherIcon = styled(WeatherIcon)`
	height: 50px;
	width: 50px;
	margin-left: 1rem;
`;

const CityWeather = ({ onClick, name, temperature, weather }) => (
	<Wrapper onClick={onClick}>
		<CityName>{name}</CityName>
		<StyledTemperature value={temperature} />
		<StyledWeatherIcon value={weather.icon} description={weather.description} />
	</Wrapper>
);

export default CityWeather;