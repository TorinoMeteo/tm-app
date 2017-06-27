import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setNetworkConnection: ['isConnected']
})

export const NetworkTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isConnected: null
})

/* ------------- Reducers ------------- */

export const networkConnection = (state, { isConnected }) =>
  state.merge({ isConnected })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_NETWORK_CONNECTION]: networkConnection
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isConnected = (networkState) => networkState.isConnected === true
