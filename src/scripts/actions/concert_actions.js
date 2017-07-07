import { fetchConcerts } from './util/concert_util'

export const FETCH_CONCERTS = 'FETCH_CONCERTS'
export const RECEIVE_CONCERTS = 'RECEIVE_CONCERTS'

export const requestConcert = location => dispatch => {
  fetchConcerts(location)
    .then(concerts)
}
