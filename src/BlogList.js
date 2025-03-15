import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {
  // we do not directly edit data in here, rather at Home where states are managed
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      { blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
          <Link to={ `/blogs/${blog.id}` }>
					<h2>{blog.title}</h2>
					<p>By {blog.author}</p>
          <button >Delete blog</button>
          </Link>
				</div>
			)) }
    </div>
   );
}
 
export default BlogList;