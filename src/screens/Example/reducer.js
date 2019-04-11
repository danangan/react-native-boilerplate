import * as actionType from './constants'

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  posts: [],
}

const exampleRequest = state => ({
  ...state,
  isLoading: true,
})

const exampleSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  posts: payload,
})

const exampleError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload,
})

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.EXAMPLE_REQUEST:
      return exampleRequest(state, action.payload)
    case actionType.EXAMPLE_SUCCESS:
      return exampleSuccess(state, action.payload)
    case actionType.EXAMPLE_ERROR:
      return exampleError(state, action.payload)
    default:
      return state
  }
}

export default exampleReducer
