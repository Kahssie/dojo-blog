import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'HAVANA', body: 'ONANA', author:'Camilla', id: 1 },
		{ title: 'The BFG', body: 'BIG FUCKEN GIANT', author:'Ralph', id: 2 },
		{ title: 'Surrounded by Idiots', body: 'not rlly no', author:'Strikson', id: 3 }
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlogs);
	}

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs✨" handleDelete={handleDelete}/>
		</div>
	);
}

export default Home;