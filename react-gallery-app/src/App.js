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
import Nav from './components/Nav';
import Cockatoos from './components/Cockatoos';
import Macaws from './components/Macaws';
import Eclectus from './components/Eclectus';
import Search from './components/Search';
import apiKey from './config';

class App extends Component {

  state = {
    photos: [], 
    loading: true
  };

  getPhotos(query = 'parrot') {
      this.setState({
          loading: true
      });
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
        <BrowserRouter>
          <SearchForm
            getPhotos={(query) => this.getPhotos(query)}
          />
          <Nav 
            getPhotos={(query) => this.getPhotos(query)}
          />
          <Switch>
            <Redirect exact from="/" to="/cockatoo" />
            <Route exact path="/cockatoo" render={() => (
              <Cockatoos 
                data={this.state.photos}
                loading={this.state.loading}
                getPhotos={(query) => this.getPhotos(query)}
              />
            )}/>
            <Route exact path="/macaw" render={() => (
              <Macaws 
                data={this.state.photos}
                loading={this.state.loading}
                getPhotos={(query) => this.getPhotos(query)}
              />
            )}/>
            <Route exact path="/eclectus" render={() => (
              <Eclectus 
                data={this.state.photos}
                loading={this.state.loading}
                getPhotos={(query) => this.getPhotos(query)}
              />
            )}/>
            <Route path="/:query" render={() => (
              <Search 
                data={this.state.photos}
                loading={this.state.loading}
                getPhotos={(query) => this.getPhotos(query)}
              />
            )} />
          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
