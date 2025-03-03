import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// run JSON server with: npx json-server --watch data/db.json --port 8000

const Home = () => {
	// const [name, setName] = useState('Ralph');
	const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

	return (
		<div className="home">
			{ error && <div>{ error }</div> }
			{ isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs✨"/>}
			{/* <button onClick={() => setName('Luigi')}>Change Name</button> */}
		</div>
	);
}

export default Home;