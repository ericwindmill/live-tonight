import React, { Component } from 'react'
import MapContainer from './MapContainer'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pos: {}
    }
  }

  // Get Geolocation!
  componentDidMount () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.setState({pos: pos})

//TODO!! I NEED AN INFO WINDOW FOR ERROR HANDLING! 

      }.bind(this), function () {
        handleLocationError(true)
      })
    } else {
      // Browser doesn't support Geolocation
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

  render () {
    console.log(this)
    return (
      <div className='Main'>
        <MapContainer />
      </div>
    )
  }

}

export default Main
