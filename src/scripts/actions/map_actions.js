// import { grabUserCoordinates } from '../util/map_util'

export const GRAB_USER_COORDS = 'GRAB_USER_COORDS'
export const GET_ZIP = 'GET_ZIP'

export const updateUserCoordinates = (lat, lng) => {
  return {
    type: GRAB_USER_COORDS,
    coords: {
      lat: lat,
      lng: lng
    }
  }
}

export const updateZip = zip => {

  return {
    type: GET_ZIP,
    zip: {zip}
  }
}
