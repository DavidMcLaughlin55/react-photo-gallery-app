import React, { Component } from 'react';
import NotFound from './NotFound';

class PhotoContainer extends Component {
  render() {

    const { photos, loading, queryText } = this.props;

    let photoDisplay;

    if (photos.length > 0) {
      photoDisplay = photos.map(photo => (
        <li>
          <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} key={photo.id} />
        </li>
      ))
    } else {
      photoDisplay = <NotFound />
    }

    return (
      <div className="photo-container" >
        <h2>{queryText}</h2>
        <ul>
          {(loading) ? <p>Loading...</p> : photoDisplay}
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;