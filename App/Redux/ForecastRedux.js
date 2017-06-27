import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  forecastRequest: null,
  forecastSuccess: ['data'],
  forecastFailure: ['error']
})

export const ForecastTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true, data: null })

// successful api lookup
export const success = (state, action) => {
  console.log('REDUX', 'FORCAST SUCCESS', action)
  const { data } = action
  return state.merge({ fetching: false, error: null, data })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, data: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FORECAST_REQUEST]: request,
  [Types.FORECAST_SUCCESS]: success,
  [Types.FORECAST_FAILURE]: failure
})
