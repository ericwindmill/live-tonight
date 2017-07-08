import React, { Component } from 'react'
import Map from './Map'

class Location extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pos: {}
    }
  }

  // Get Geolocation and put it in the state!
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

  // Get ZipCode and put it in the application state!
  componentDidUpdate (prevProps, prevState) {
    let pos, lat, lng
    if (prevState.pos !== this.state.pos) {
      lat = this.state.pos.lat
      lng = this.state.pos.lng
      pos = { lat: lat, lng: lng } 
      this.props.updateUserCoordinates(lat, lng)

      let coder = new google.maps.Geocoder
      coder.geocode({'location': pos}, (results, status) => {
        let zip = results[0].address_components.slice(-1)[0].long_name
        this.props.updateZip(zip)
      })
    }
  }

  render () {
    return (
      <div className='Location'>
        <Map map={this.props.map} />
      </div>
    )
  }

}

export default Location
