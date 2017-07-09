// import { fetchConcerts } from '../util/concert_util'

export const FETCH_CONCERTS = 'FETCH_CONCERTS'
export const RECEIVE_CONCERTS = 'RECEIVE_CONCERTS'

export const receiveConcerts = concerts => {
  return {
    type: RECEIVE_CONCERTS,
    concerts: concerts
  }
}

// const parseConcerts = (data) => {
//   let concerts = {}
//   data.forEach((concert, idx) => {
//     let artists = concert.Artists.map((artist) => {
//       return artist.Name
//     })
//     concerts[idx] = {
//       id: concert.Id,
//       artist: artists,
//       venue: concert.Venue.Name,
//       lat: concert.Venue.Lattitude,
//       lng: concert.Venue.Longitude
//     }
//   })
//   receiveConcerts(concerts)
// }

export const requestConcerts = location => dispatch => {
  let d = new Date()
  let today = `${d.getFullYear()}-0${d.getMonth() + 1}-0${d.getDate()}`
  let tomorrow = `${d.getFullYear()}-0${d.getMonth() + 1}-0${d.getDate() + 1}`
  let zip = parseInt(location)
  fetch(`http://api.jambase.com/events?zipCode=${zip}&radius=60&startDate=${today}&endDate=${tomorrow}&page=0&api_key=3dwvyy34qeajjs6q4q7vam2g`)
    .then(resp => (resp.json()))
    .then(data => {
      let concerts = {}
      data.Events.forEach((concert, idx) => {
        let artists = concert.Artists.map((artist) => {
          return artist.Name
        })
        concerts[idx] = {
          id: concert.Id,
          artist: artists,
          venue: concert.Venue.Name,
          lat: concert.Venue.Latitude,
          lng: concert.Venue.Longitude
        }
      })
      dispatch(receiveConcerts(concerts))
    })
}
