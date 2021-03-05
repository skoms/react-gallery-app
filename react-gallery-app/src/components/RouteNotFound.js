import NotFoundIcon from '../404icon.png';

/**
 * Declares the 'RouteNotFound' Component that will load when the route entered doesn't exist
 * @returns {React Component} RouteNotFound - The 404 error displaying component
 */
const RouteNotFound = () => {
    return (
        <ul>
            <li className="not-found">
                <img src={NotFoundIcon} alt="404 Error Icon" 
                style={
                        {
                            height: 150, 
                            marginTop: "30px",
                            padding: "3px",
                            backgroundColor: "#28cf8f"
                        }
                    }/>
                <h3>Not Found</h3>
                <p>The page you tried to load does not exist. Please try again.</p>
            </li>
        </ul>
    );
}

export default RouteNotFound;