import { put, takeLatest, call } from 'redux-saga/effects'

import * as actionType from './constants'
import * as exampleAction from './action'
import API from 'utils/xhr'

function* example() {
  try {
    const res = yield call(API.get, '/posts')
    yield put(exampleAction.exampleSuccess(res))
  } catch (error) {
    yield put(exampleAction.exampleError(error.message))
  }
}

export default function* watchExample() {
  yield takeLatest(actionType.EXAMPLE_REQUEST, example)
}
