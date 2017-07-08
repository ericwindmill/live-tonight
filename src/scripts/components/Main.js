import React, { Component } from 'react'
import MapContainer from './MapContainer'
// import { grabUserCoordinates } from '../util/map_util'
// import { updateUserCoordinates } from '../actions/map_actions'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pos: {}
    }
  }

  // Get Geolocation!
  componentWillMount () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.setState({pos: pos})
        // TODO!! I NEED AN INFO WINDOW FOR ERROR HANDLING!
      }.bind(this), function () {
        handleLocationError(true)
      })
    } else {
      handleLocationError(false)
    }
    function handleLocationError (browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos)
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.')
      infoWindow.open(map);
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.pos !== this.state.pos) {
      let lat = this.state.pos.lat
      let lng = this.state.pos.lng
      this.props.updateUserCoordinates(lat, lng)
    }
  }

  render () {
    return (
      <div className='Main'>
        <MapContainer />
      </div>
    )
  }

}

export default Main
