import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import apiKey from '../config';


// App Component Imports
import Nav from './Nav';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

//Fetch API
const photoApiKey = apiKey;

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${photoApiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching data.', error)
      });
  }

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Routes>
            <Route path='/' element={<PhotoContainer photos={this.state.photos} />} />
            <Route component={NotFound} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
