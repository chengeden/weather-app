const Temperature = ({ value, className }) => ( // styled components里要给一个标准的component加样式，需要加class name
	<span className={className}>{value}°</span>
);


export default Temperature;