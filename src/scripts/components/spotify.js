import React, { Component } from 'react'
import {
  requestSpotify
} from '../util/music_util'

export default class Spotify extends Component {

  // componentDidMount () {
  //   requestSpotify()
  // }

  render () {
    return (
      <div className='player'>
        <h1>Player:</h1>
      </div>
    )
  }
}

