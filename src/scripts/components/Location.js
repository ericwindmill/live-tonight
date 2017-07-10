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
        this.props.updateUserCoordinates(pos.lat, pos.lng) // I need this for subsequent updates
        this.setState({pos: pos}) // I need this for the initial update
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
    let { map } = this.props
    if (prevState.pos !== this.state.pos) {
      lat = map.lat
      lng = map.lng
      pos = { lat: lat, lng: lng } 
      this.props.updateUserCoordinates(lat, lng)

      let coder = new google.maps.Geocoder
      coder.geocode({'location': pos}, (results, status) => {
        for (var j = 0; j < results.length - 1; j++) {
          let postal = results[j].address_components
          for (var i = 0; i < postal.length; i++) {
            if (postal[i].types == 'postal_code') {
              this.props.updateZip(postal[i].long_name)
              break
            }
          }
        }
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.map.zip !== nextProps.map.zip) {
      // this.props.requestConcerts(nextProps.map.zip)
    }
  }

  render () {
    return (
      <div className='Location'>
        <Map concerts={this.props.concerts} map={this.props.map} />
      </div>
    )
  }

}

export default Location
