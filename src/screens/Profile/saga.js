import { call, put, takeLatest, all } from 'redux-saga/effects'

import * as actionType from './constants'
import * as profileAction from './action'
import profile from './graphql'

function* getProfile() {
  try {
    const {
      data: { pelangganProfile },
    } = yield call(profile.query)
    yield put(profileAction.getProfileSuccess(pelangganProfile))
  } catch (error) {
    yield put(profileAction.getProfileError(error))
  }
}

function* putProfile() {
  try {
    const res = yield call(profile.mutation)
    yield put(profileAction.putProfileSuccess(res))
  } catch (error) {
    yield put(profileAction.putProfileError(error))
  }
}

export default function* watchProfile() {
  yield all([
    takeLatest(actionType.GET_PROFILE_REQUEST, getProfile),
    takeLatest(actionType.PUT_PROFILE_REQUEST, putProfile),
  ])
}
