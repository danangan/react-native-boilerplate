import { all, fork } from 'redux-saga/effects'

import watchExample from './screens/Example/saga'
import watchProfile from './screens/Profile/saga'

export default function* rootSaga() {
  yield all([fork(watchExample), fork(watchProfile)])
}
