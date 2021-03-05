const RouteNotFound = (props) => {
    return (
        <ul>
            <li className="not-found">
                <img src='../404icon.png' alt="404 Error Icon"/>
                <h3>404 - Not Found</h3>
                <p>You page you tried to load does not exist. Please try again.</p>
            </li>
        </ul>
    );
}

export default RouteNotFound;