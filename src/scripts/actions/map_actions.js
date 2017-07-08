// import { grabUserCoordinates } from '../util/map_util'

export const GRAB_USER_COORDS = 'GRAB_USER_COORDS'

export const updateUserCoordinates = (lat, lng) => {
  return {
    type: GRAB_USER_COORDS,
    coords: {
      lat: lat,
      lng: lng
    }
  }
}
