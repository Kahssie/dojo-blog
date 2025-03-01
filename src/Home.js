import { useState } from "react";

const Home = () => {
	// let name = 'Kahssie';

  const [name, setName]	= useState('Kahssie');
	const [age, setAge] = useState(25);

	const handleClick = () => {
		// console.log('hello smelly bois', e); e is default returned param from events
		setName('Luigi');
		setAge(26);
	};



	return (
		<div className="home">
			<h2>Homepage</h2>
			<p>{name} is {age} years old.</p>
			<button onClick={handleClick}>Click me</button>
			{/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
		</div>
	);
}

export default Home;