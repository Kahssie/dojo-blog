import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'HAVANA', body: 'ONANA', author:'Camilla', id: 1 },
		{ title: 'The BFG', body: 'BIG FUCKEN GIANT', author:'Ralph', id: 2 },
		{ title: 'Surrounded by Idiots', body: 'not rlly no', author:'Strikson', id: 3 }
	])

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs✨"/>
			<BlogList blogs={blogs.filter((blog) => blog.author==='Camilla')} title="Camilla's Blog Selection✨"/>
		</div>
	);
}

export default Home;