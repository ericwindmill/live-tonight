import React, { Component } from 'react'

export default class Spotify extends Component {

  render () {
    return (
      <div className='player'>
        <h1>Player:</h1>
        <iframe src="https://open.spotify.com/embed?uri=spotify:user:e-wind:playlist:6jggksaooh4DHdmaWZFzJ5" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
      </div>
    )
  }
}

