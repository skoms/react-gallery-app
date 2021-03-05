import React, { Component } from 'react';
import Photo from './Photo';
import SearchNotFound from './SearchNotFound';
import Loading from './Loading';

class PhotoContainer extends Component {
    componentDidMount() {
        this.props.getPhotos(this.props.query);
        console.log('mounted');
    }

    componentDidUpdate(prevProps) {
        if(prevProps.data === this.props.data && prevProps.query !== this.props.query) {
            this.props.getPhotos(this.props.query);
            console.log('update');
        }
    }

    render() {
        if(this.props.loading) {
            return <Loading />;
        } else {
            console.log('new');
            const { data } = this.props;
            let photos;
            if( data.length > 0 ) {
                photos = data.map( img => <Photo server={img.server} id={img.id} key={img.id} secret={img.secret} />);
                photos = (
                    <ul>
                        { photos }
                    </ul>
                );
            } else {
                photos = (<SearchNotFound />);
            }
            return (
                <div className="photo-container">
                    <h2>{this.props.query} photos</h2>
                        { photos }
                </div>
            );
        }
        
        
    }
}

export default PhotoContainer;