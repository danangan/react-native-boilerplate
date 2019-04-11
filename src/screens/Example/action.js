import * as actionType from './constants'

export const exampleRequest = data => ({
  type: actionType.EXAMPLE_REQUEST,
  payload: data,
})

export const exampleSuccess = data => ({
  type: actionType.EXAMPLE_SUCCESS,
  payload: data,
})

export const exampleError = error => ({
  type: actionType.EXAMPLE_ERROR,
  payload: error,
})
