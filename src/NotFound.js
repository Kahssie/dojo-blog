import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Sorry</h2>
      <p>This page could not be found.</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
   );
}
 
export default NotFound;