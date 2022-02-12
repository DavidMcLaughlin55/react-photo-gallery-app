import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


// App Component Imports
import Nav from './Nav';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';

const App = () => (
  <BrowserRouter>
    <div className="container">
        <SearchForm />
        <Nav />
        <Routes>
          <Route exact path='/' component={PhotoContainer} />
          <Route path='/cats' component={PhotoContainer} />
          <Route path='/dogs' component={PhotoContainer} />
          <Route path='/computers' component={PhotoContainer} />
        </Routes>
    </div>
  </BrowserRouter>
);

export default App;
