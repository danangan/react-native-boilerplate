import * as actionType from './constants'

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  user: [],
}

const getProfileRequest = state => ({
  ...state,
  isLoading: true,
})

const getProfileSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  user: payload,
})

const getProfileError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload,
})

const putProfileRequest = state => ({
  ...state,
  isLoading: true,
})

const putProfileSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  user: payload,
})

const putProfileError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload,
})

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_PROFILE_REQUEST:
      return getProfileRequest(state, action.payload)
    case actionType.GET_PROFILE_SUCCESS:
      return getProfileSuccess(state, action.payload)
    case actionType.GET_PROFILE_ERROR:
      return getProfileError(state, action.payload)
    case actionType.PUT_PROFILE_REQUEST:
      return putProfileRequest(state, action.payload)
    case actionType.PUT_PROFILE_SUCCESS:
      return putProfileSuccess(state, action.payload)
    case actionType.PUT_PROFILE_ERROR:
      return putProfileError(state, action.payload)
    default:
      return state
  }
}

export default profileReducer
