import { useEffect, useState } from "react";
import Section from "../Section/Section";
import CityWeather from "./components/CItyWeather/CityWeather";
import getWeathers from "../../apis/getWeathers/getWeathers";

const OtherCities = ({ currentCityId, setCurrentCityId }) => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const OtherCitiesId = [2158177, 2147714, 2174003, 2063523].filter((id) => id !== currentCityId);
		getWeathers(OtherCitiesId)
			.then((res) => {
				setData(res.data);
				setLoading(false);
			});
	}, [currentCityId]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<Section title="Other cities">
			{data.list.map(({ id, name, main: { temp }, weather: [weather] }) => (
				<CityWeather
					key={id}
					onClick={() => setCurrentCityId(id)}
					name={name}
					temperature={temp}
					weather={weather}
				/>
			))}
		</Section>
	);
};

export default OtherCities;