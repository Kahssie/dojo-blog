import { useEffect, useState } from "react";
import BlogList from "./BlogList";

// run JSON server with: npx json-server --watch data/db.json --port 8000

const Home = () => {
	const [blogs, setBlogs] = useState(null);



	const [name, setName] = useState('Ralph');

	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then(res => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setBlogs(data);
			})
	}, []); // empty dependency array only runs once on the first render, or add any state values that should trigger useeffect when their state changes

	return (
		<div className="home">
			{blogs && <BlogList blogs={blogs} title="All Blogs✨"/>}
			<button onClick={() => setName('Luigi')}>Change Name</button>
		</div>
	);
}

export default Home;