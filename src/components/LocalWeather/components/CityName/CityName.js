import styled from "styled-components";

const Container = styled.div`
	margin-top: 1rem;
	color: #fff;
	font-weight: 500;
	font-size: 2rem;

	&::after {
		content: "";
		display: block;
		margin-top: 0.5rem;
		height: 2px;
		background: #fff;
		border-radius: 2px;
		width: 50%;
		transform: translateX(50%);
	}
`;

const CityName = ({ name }) => (
	<Container>{name}</Container>
);

export default CityName;