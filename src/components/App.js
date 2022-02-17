import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import apiKey from '../config';


// App Component Imports
import Nav from './Nav';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';

//Fetch API
const photoApiKey = apiKey;

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      photos: [],
      cats: [],
      dogs: [],
      computers: [],
      query: ''
    };
  }

  componentDidMount() {
    this.querySearch();
    this.querySearch('cats');
    this.querySearch('dogs');
    this.querySearch('computers');
  }

  querySearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${photoApiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === 'cats') {
          this.setState({
            cats: response.data.photos.photo,
            loading: false,
          });
        } else if (query === 'dogs') {
          this.setState({
            dogs: response.data.photos.photo,
            loading: false,
          });
        } else if (query === 'computers') {
          this.setState({
            computers: response.data.photos.photo,
            loading: false,
          });
        } else {
          this.setState({
            photos: response.data.photos.photo,
            loading: false,
          });
        }
      })
      .catch(error => {
        console.log('Error fetching data.', error)
      });
  }

  render() {

    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.querySearch} />
          <Nav />
          <Switch>
            <Route exact path='/:query' render={({ match }) => <PhotoContainer queryText={match.params.query} loading={this.state.loading} photos={this.state.photos} />} />
            <Route path='/cats' render={() => <PhotoContainer queryText='cats' loading={this.state.loading} photos={this.state.cats} />} />
            <Route path='/dogs' render={() => <PhotoContainer queryText='dogs' loading={this.state.loading} photos={this.state.dogs} />} />
            <Route path='/computers' render={() => <PhotoContainer queryText='computers' loading={this.state.loading} photos={this.state.computers} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
