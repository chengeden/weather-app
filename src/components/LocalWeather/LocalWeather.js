import styled from "styled-components";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Weather from "./components/Weather/Weather";
import CityName from "./components/CityName/CityName";
import getWeather from "../../apis/getWeather/getWeather";
import { useEffect, useState } from "react";

const Layout = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 64px 96px;
`;

const LocalWeather = ({ cityId }) => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getWeather(cityId).then(({ data }) => {
			setData(data);
			setLoading(false);
		});
	}, [cityId]);

	if (loading) {
		return <div>Loading...</div>;
	};

	return (
		<BackgroundImage src="https://i.imgur.com/GhQZhaO.jpg">
			<Layout>
				<Weather data={data} />
				<CityName name={data.name} />
			</Layout>
		</BackgroundImage>
	);
};
export default LocalWeather;