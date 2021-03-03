import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {
    componentDidMount() {
        this.props.getPhotos(this.props.query);
    }

    render() {
        if(this.props.loading) {
           return <p>Loading...</p>;
        } else {
            const { data } = this.props;
            let photos;
            if( data.length > 0 ) {
                photos = data.map( img => <Photo server={img.server} id={img.id} secret={img.secret} />);
                photos = (
                    <ul>
                        { photos }
                    </ul>
                );
            } else {
                photos = (<NotFound />);
            }
            return (
                <div className="photo-container">
                    <h2>Results</h2>
                        { photos }
                </div>
            );
        }
        
        
    }
}

export default PhotoContainer;