// import { fetchConcerts } from '../util/concert_util'

export const FETCH_CONCERTS = 'FETCH_CONCERTS'
export const RECEIVE_CONCERTS = 'RECEIVE_CONCERTS'

const parseConcerts = (data) => {
  data.forEach((concert, idx) => {
    console.log(concert.Id)
    console.log(concert.Artists[0].Name)
    console.log(concert.Venue.Name)
  })
}

export const requestConcerts = location => dispatch => {
  let d = new Date()
  let today = `${d.getFullYear()}-0${d.getMonth() + 1}-0${d.getDate()}`
  let tomorrow = `${d.getFullYear()}-0${d.getMonth() + 1}-0${d.getDate() + 1}`
  let zip = parseInt(location)
  fetch(`http://api.jambase.com/events?zipCode=${zip}&radius=60&startDate=${today}&endDate=${tomorrow}&page=0&api_key=3dwvyy34qeajjs6q4q7vam2g`)
    .then(resp => (resp.json()))
    .then(data => {
      parseConcerts(data.Events)
    })
}



