import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * Declares the 'SearchForm' React.Component
 * @function onSearchChange() - Method that gets called when the component value has
 *  changed in the search field input
 * @function handleSubmit() - Method that gets called when the form is submitted
 * @function render() - Render method that renders the returned JSX
 */
class SearchForm extends Component {
    state = {
        searchInput: ''
    }; 

    /**
     * Event handler that updates the state of 'searchInput' depending on event
     * object target value 
     * @param {Object} e - Event object
     */
    onSearchChange = e => {
        this.setState({ searchInput: e.target.value });
    }

    /**
     * Event handler that prevents submit event default, updates the data and 
     * url according to the 'searchInput' state
     * @param {Object} e - Event object
     */
    handleSubmit = e => {
        const { searchInput } = this.state;
        e.preventDefault();
        this.props.getPhotos(searchInput);
        this.props.history.push('/search/' + searchInput);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}> {/* adds eventHandler for when form is submitted */}
                <input 
                    type="search" 
                    name="search" 
                    placeholder="Search" 
                    onChange={this.onSearchChange} 
                    required/> {/* adds eventHandler for when field value changes */} 
                <button type="submit" className="search-button">
                <svg fill="#1e5296" height="28" viewBox="0 0 23 23" width="28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                </button>
            </form>
        );
    }
}

export default withRouter(SearchForm); // Uses withRouter to access the 'history' prop to pushState (Update the URL)