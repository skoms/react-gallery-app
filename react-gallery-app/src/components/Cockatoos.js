import PhotoContainer from './PhotoContainer';

/**
 * Declares the 'Cockatoos' Component that will return a component photo container of photos
 * @param {Object} props - Used to access properties passed down
 * @returns {React Component} PhotoContainer - The container that loads the photos
 */
const Cockatoos = (props) => {
    let query = 'cockatoo';
    return (
        <PhotoContainer 
                data={props.data}
                loading={props.loading}
                getPhotos={props.getPhotos}
                query={query}
        />
    );
}

export default Cockatoos;