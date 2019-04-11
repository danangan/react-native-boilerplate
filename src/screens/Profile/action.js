import * as actionType from './constants'

export const getProfileRequest = data => ({
  type: actionType.GET_PROFILE_REQUEST,
  payload: data,
})

export const getProfileSuccess = data => ({
  type: actionType.GET_PROFILE_SUCCESS,
  payload: data,
})

export const getProfileError = error => ({
  type: actionType.GET_PROFILE_ERROR,
  payload: error,
})

export const putProfileRequest = data => ({
  type: actionType.PUT_PROFILE_REQUEST,
  payload: data,
})

export const putProfileSuccess = data => ({
  type: actionType.PUT_PROFILE_SUCCESS,
  payload: data,
})

export const putProfileError = error => ({
  type: actionType.PUT_PROFILE_ERROR,
  payload: error,
})
