import PhotoContainer from './PhotoContainer';

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