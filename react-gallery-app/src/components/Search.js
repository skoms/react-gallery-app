import PhotoContainer from './PhotoContainer';
import { useParams } from 'react-router-dom';

/**
 * Declares the 'Search' Component that will render a photo container of photos 
 * depending on the query entered
 * @param {Object} props - Used to access properties passed down
 * @returns {React Component} PhotoContainer - The container that loads the photos
 */
const Search = (props) => {
    let { query } = useParams(); // Fetches the query from url parameter '/:query' using the 'react-router-dom' 'useParams' function.
    return (
        <PhotoContainer 
                data={props.data}
                loading={props.loading}
                getPhotos={props.getPhotos}
                query={query}
        />
    );
}

export default Search;