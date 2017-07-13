import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import forEach from 'lodash/forEach'
import MarkerManager from '../util/map_markers'

class Map extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      coords: ''
    }
  }

  componentDidMount () {
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map)
    let mapOptions = {
      center: {lat: 37.7749, lng: -122.4149},
      zoom: 12
    }
    this.map = new google.maps.Map(mapDOMNode, mapOptions)
    this.markerManager = new MarkerManager(this.map)
  }
 
  componentDidUpdate (prevProps, prevState) {
    let pos = {lat: this.props.map.lat, lng: this.props.map.lng} 
    this.map.setCenter(pos)
    var markers
    if (prevProps.concerts !== this.props.concerts) {
      markers = {}
      Object.entries(this.props.concerts).forEach (([id, concert]) => {
        let latLng = { lat: concert.lat, lng: concert.lng }
          var marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            title: concert.artist[0] || ''
          });
        markers[concert.id] = marker
      })
    }
    this.markerManager.updateMarkers(markers)
  }
  

  render () {
    return (
      <div className='Map'>
        <div ref='map' id="map"></div>
      </div>
    )
  }

}

export default Map
