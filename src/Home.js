import { useState } from "react";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'HAVANA', body: 'ONANA', author:'Camilla', id: 1 },
		{ title: 'The BFG', body: 'BIG FUCKEN GIANT', author:'Ralph', id: 2 },
		{ title: 'Surrounded by Idiots', body: 'not rlly no', author:'Strikson', id: 3 }
	])

	return (
		<div className="home">
			{ blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>By {blog.author}</p>
				</div>
			)) }
		</div>
	);
}

export default Home;