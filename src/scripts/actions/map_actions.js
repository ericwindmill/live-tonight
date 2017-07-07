import { grabUserCoordinates } from '../util/map_util'

export const GRAB_USER_COORDS = 'GRAB_USER_COORDS'

export const requestUserCoordinates = coords => {
  grabUserCoordinates()
    .then(receiveUserCoordinates(coords))
}

export const receiveUserCoordinates = coords => dispatch => {
  return {
    type: GRAB_USER_COORDS,
    coords
  }
}
