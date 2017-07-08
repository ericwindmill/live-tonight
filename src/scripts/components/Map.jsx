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
      
      // let coder = new google.maps.Geocoder
      // coder.geocode({'location': pos}, (results, status) => {
      //   this.props.updateZip(results[0].address_components.slice(-1)[0].long_name)
      // })
      // } 
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
