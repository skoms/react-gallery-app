import './css/index.css';
import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import apiKey from './config';

class App extends Component {

  state = {
    photos: [], 
    loading: true
  };

  componentDidMount() {
      this.getPhotos();
  }

  getPhotos(query = 'parrot') {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&&tags=${query}&format=json&nojsoncallback=1`)
          .then((response => {
              console.log(response.data.photos.photo);
              this.setState({
                  photos: response.data.photos.photo,
                  loading: false
              });
          }))
          .catch(error => {
              console.log('Error fetching photos', error)
          });
  }

  render() {
    return (
      <div className='container'>
        <HashRouter>
          <SearchForm />
          <Nav />
          {
              (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoContainer 
                  data={this.state.photos} 
                />
          }
        </HashRouter>
      </div>
    );
  }
}

export default App;
