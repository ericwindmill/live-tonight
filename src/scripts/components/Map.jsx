import React, { Component } from 'react'



class Map extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      coords: ''
    }

  }

  componentDidMount () {
    // create a script tag and mount it to the document head
    let script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcYz-3h9S5-f1FJlyHcivofQ5TC4M6Jno&callback=initMap')
    document.getElementsByTagName('head')[0].appendChild(script)
    // create the map... 
    window.initMap = () => {
      let pos = {lat: 37.7749, lng: -122.4194}
      let zoom = 12
      let infoWindow = new google.maps.InfoWindow;
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: pos
      });
      
      // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
          infoWindow.open(map);
        }
      }
    }
  

  render () {
    return (
      <div className='Map'>
        <div id="map"></div>
      </div>
    )
  }

}

export default Map
