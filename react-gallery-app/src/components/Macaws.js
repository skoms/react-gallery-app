import PhotoContainer from './PhotoContainer';

const Macaws = (props) => {
    let query = 'macaw';
    return (
        <PhotoContainer 
                data={props.data}
                loading={props.loading}
                getPhotos={props.getPhotos}
                query={query}
        />
    );
}

export default Macaws;