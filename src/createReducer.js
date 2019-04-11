import { combineReducers } from 'redux'

import exampleReducer from './screens/Example/reducer'
import profileReducer from './screens/Profile/reducer'

const rootReducer = combineReducers({
  example: exampleReducer,
  profile: profileReducer,
})

export default rootReducer
