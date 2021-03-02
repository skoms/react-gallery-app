import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {
    render() {
        const { data } = this.props;
        let photos;
        if( data.length > 0 ) {
            photos = data.map( img => <Photo server={img.server} id={img.id} secret={img.secret} />);
        } else {
            photos = (
                <li key="404">
                    <NotFound />
                </li>
            );
        }
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    { photos }
                </ul>
                
            </div>
        );
        
    }
}

export default PhotoContainer;