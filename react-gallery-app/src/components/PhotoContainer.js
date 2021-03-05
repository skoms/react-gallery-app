import React, { Component } from 'react';
import Photo from './Photo';
import SearchNotFound from './SearchNotFound';
import Loading from './Loading';

/**
 * Declares the 'PhotoContainer' React.Component
 * @function componentDidMount() - Method that gets called when the component is mounted
 * @function componentDidUpdate() - Method that gets called when the component is updated
 * @function render() - Render method that renders the returned JSX
 */
class PhotoContainer extends Component {
    // Fetches photos and updates on mount
    componentDidMount() {
        this.props.getPhotos(this.props.query);
    }

    /* 
    Fetches photos and updates in the case that the case that the data is still the same,
    but the query is different. This is to deal with browser buttons 'back' and 'forward', 
    ensuring that the data and query always matches.
    */
    componentDidUpdate(prevProps) {
        if(prevProps.data === this.props.data && prevProps.query !== this.props.query) {
            this.props.getPhotos(this.props.query);
        }
    }

    render() {
        // If the state of 'App' 'loading' is true, render the 'Loading' component
        if(this.props.loading) {
            return <Loading />;
        } else {
            // Else map over the data and return photo container with photos
            const { data } = this.props;
            let results; 
            if( data.length > 0 ) { // checks if data has any results, sets value to 'results' if true
                results = data.map( img => 
                    <Photo 
                        server={img.server} 
                        id={img.id} 
                        key={img.id} 
                        secret={img.secret} 
                    />
                );
                results = (
                    <ul>
                        { results }
                    </ul>
                );
            } else { // else sets the 'SearchNotFound' component's value to 'results'
                results = (<SearchNotFound />);
            }
            return ( // returns JSX for 'PhotoContainer', with dynamic results and title 
                <div className="photo-container">
                    <h2>{this.props.query} photos</h2>
                    { results }
                </div>
            );
        }
        
        
    }
}

export default PhotoContainer;