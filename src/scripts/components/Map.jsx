import React, { Component } from 'react'


class Map extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // create a script tag dynamically and mount it to the document head
    let script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcYz-3h9S5-f1FJlyHcivofQ5TC4M6Jno&callback=initMap')
    document.getElementsByTagName('head')[0].appendChild(script)
    
    window.initMap = () => {
      let pos = {lat: 37.7749, lng: 122.4194}
      let zoom = 3
      let infoWindow = new google.maps.InfoWindow;
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: pos
      });
      // Create marker at ATT Park
      var markerPos = {lat: 37.7786, lng: -122.3893}
      var marker = new google.maps.Marker({
        position: markerPos,
        map: map,
        title: 'ATT Park'
      });
      
      // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            zoom = 14
      //Insert an info window to show current location / TODO: Remove after testing.
            infoWindow.setPosition(pos);
            infoWindow.setContent('You Are Here.');
            infoWindow.open(map);
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
