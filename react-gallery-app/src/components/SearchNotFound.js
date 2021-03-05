/**
 * Declares the 'SearchNotFound' Component that will return a component 
 * informing user that no results were found
 * @returns {React Component} ul - The container that loads the error message component
 */
const SearchNotFound = () => (
    <ul>
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
        </li>
    </ul>
);

export default SearchNotFound;