import PhotoContainer from './PhotoContainer';

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