import './css/index.css';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import skomsDev from './Skoms_dev2.png';
import Nav from './components/Nav';
import Cockatoos from './components/Cockatoos';
import Macaws from './components/Macaws';
import Eclectus from './components/Eclectus';
import Search from './components/Search';
import RouteNotFound from './components/RouteNotFound';
import apiKey from './config';

/**
 * Declares the 'App' React.Component
 * @function getPhotos() - Method used for fetching (with axios) and updating 'photos' data
 * @function render() - Render method that renders the returned JSX
 */
class App extends Component {
  state = {
    photos: [], 
    loading: true
  };

  /**
   * Fetches and updates the state 'photos', and utilizing the state 'loading' to 
   * determine whether or not the data is still being loaded in (used for example to decide
   * whether to render the photos or a loading screen)
   * @param {String} query - The search query used to find the relevant data
   */
  getPhotos(query = 'parrot') {
      if(!this.state.loading) { // Resets the 'loading' state if its 'false'
        this.setState({
          loading: true
        });
      }
      // fetches the data using this dynamic URL supplied with an API key and the dynamic 'query' parameter argument
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&&tags=${query}&format=json&per_page=24&nojsoncallback=1`)
          .then((response => {
              this.setState({ 
                  /* then updating the states, setting/updating the 'photos', 
                  and setting 'loading' to 'false' as the request has been solved */
                  photos: response.data.photos.photo,
                  loading: false
              });
          }))
          .catch(error => { // using .catch to catch any fetching error, and logging it in the console.
              console.log('Error fetching photos', error)
          });
  }

  render() {
    const { photos, loading } = this.state;
    return (
      <div className='container'>
        <BrowserRouter>
          <img src={skomsDev} className="skoms-dev-logo" alt="SkomsDev Logo" height="120"/> {/* Personalized touch (My own logo) */}
          <SearchForm
            getPhotos={(query) => this.getPhotos(query)} // passing the 'getPhotos' method as through callback to make sure its bound to 'this'
          />
          <Nav />
          <Switch> {/* Using switch so that only one component can be rendered at once */}
            <Redirect exact from="/" to="/cockatoo" /> {/* Redirects users to the first navlink to make sure that photos are displayed on launch */}
            <Route exact path="/cockatoo" render={() => (
              <Cockatoos 
                data={photos}
                loading={loading}
                getPhotos={(query) => this.getPhotos(query)} // same as with SearchForm
              />
            )}/>
            <Route exact path="/macaw" render={() => (
              <Macaws 
                data={photos}
                loading={loading}
                getPhotos={(query) => this.getPhotos(query)} // same as with SearchForm
              />
            )}/>
            <Route exact path="/eclectus" render={() => (
              <Eclectus 
                data={photos}
                loading={loading}
                getPhotos={(query) => this.getPhotos(query)} // same as with SearchForm
              />
            )}/>
            <Route path="/search/:query" render={() => (
              <Search 
                data={photos}
                loading={loading}
                getPhotos={(query) => this.getPhotos(query)} // same as with SearchForm
              />
            )} />
            <Route component={RouteNotFound}/> {/* rendering the 404 - Not Found component if no other routes match */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
