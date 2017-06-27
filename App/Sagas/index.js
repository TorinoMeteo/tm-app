import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { RealtimeTypes } from '../Redux/RealtimeRedux'
import { ForecastTypes } from '../Redux/ForecastRedux'
import { WebcamTypes } from '../Redux/WebcamRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getRealtimeData } from './RealtimeSagas'
import { getForecast } from './ForecastSagas'
import { getWebcams } from './WebcamSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(RealtimeTypes.REALTIME_REQUEST, getRealtimeData, api),
    takeLatest(ForecastTypes.FORECAST_REQUEST, getForecast, api),
    takeLatest(WebcamTypes.WEBCAM_REQUEST, getWebcams, api)
  ]
}
