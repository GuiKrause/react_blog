import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Error 404</h2>
            <p>That page cannot be found...</p>
            <Link to='/'>Back to the home Page</Link>
        </div>
    );
}
 
export default NotFound;