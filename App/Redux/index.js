import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    network: require('./NetworkRedux').reducer,
    realtime: require('./RealtimeRedux').reducer,
    forecast: require('./ForecastRedux').reducer,
    webcams: require('./WebcamRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
