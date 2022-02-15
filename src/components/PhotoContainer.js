import React, { Component } from 'react';

class PhotoContainer extends Component {
  render() {

    const { photos } = this.props;

    return (
      <div className="photo-container" >
        <h2>Results</h2>
        <ul>
          {photos.map(photo => (
            <li>
              <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} key={photo.id} />
            </li>
          )
          )}
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;