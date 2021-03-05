import PhotoContainer from './PhotoContainer';

/**
 * Declares the 'Eclectus' Component that will return a component photo container of photos
 * @param {Object} props - Used to access properties passed down
 * @returns {React Component} PhotoContainer - The container that loads the photos
 */
const Eclectus = (props) => {
    let query = 'eclectus';
    return (
        <PhotoContainer 
                data={props.data}
                loading={props.loading}
                getPhotos={props.getPhotos}
                query={query}
        />
    );
}

export default Eclectus;