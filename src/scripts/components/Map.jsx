import React, { Component } from 'react'
import ReactDOM from 'react-dom'


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
    }
 
    componentDidUpdate (prevProps, prevState) {
      let pos = {lat: this.props.map.lat, lng: this.props.map.lng} 
      this.map.setCenter(pos)
    }
  

  render () {
    console.log(this.props)
    return (
      <div className='Map'>
        <div ref='map' id="map"></div>
      </div>
    )
  }

}

export default Map
