import { put, select } from 'redux-saga/effects'

import RealtimeActions from '../Redux/RealtimeRedux'
import ForecastActions from '../Redux/ForecastRedux'
import WebcamActions from '../Redux/WebcamRedux'

export const selectRealtimeData = (state) => state.realtime.data
export const selectForecast = (state) => state.forecast.data
export const selectWebcams = (state) => state.webcams.data

// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    // fully customized!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!'
      }
    })
  }
  // only get if we don't have it yet
  console.log('SAGAS', 'STARTUP', 'fetching realtime data if not already fetched')
  const realtimeData = yield select(selectRealtimeData)
  if (!realtimeData || !realtimeData.length) {
    console.log('SAGAS', 'STARTUP', 'actually fetching realtimeData')
    yield put(RealtimeActions.realtimeRequest())
  }

  console.log('SAGAS', 'STARTUP', 'fetching forecast if not already fetched')
  const forecast = yield select(selectForecast)
  if (!forecast) {
    console.log('SAGAS', 'STARTUP', 'actually fetching forecast')
    yield put(ForecastActions.forecastRequest())
  }

  console.log('SAGAS', 'STARTUP', 'fetching webcam if not already fetched')
  const webcams = yield select(selectWebcams)
  if (!webcams) {
    console.log('SAGAS', 'STARTUP', 'actually fetching webcams')
    yield put(WebcamActions.webcamRequest())
  }
}
