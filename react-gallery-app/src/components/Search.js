import PhotoContainer from './PhotoContainer';
import { useParams } from 'react-router-dom';

const Search = (props) => {
    let { query } = useParams();
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