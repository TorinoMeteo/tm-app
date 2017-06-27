import { NavigationActions } from 'react-navigation'

const config = {}

export function setNavigator (nav) {
  if (nav) {
    config.navigator = nav
  }
}

export function navigate (routeName, params) {
  if (config.navigator && routeName) {
    let action = NavigationActions.navigate({ routeName, params })
    config.navigator.dispatch(action)
  }
}

export function resetTo (routeName, params) {
  const actionToDispatch = NavigationActions.reset({
    index: 0,
    key: null, // https://github.com/react-community/react-navigation/issues/1127
    actions: [NavigationActions.navigate({ routeName }, params)]
  })
  config.navigator.dispatch(actionToDispatch)
  /*
  NavigationActions.navigate({ routeName }, params)
  const resetAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
      NavigationActions.navigate({ routeName: routeName }, params)
    ]
  })
  setTimeout(config.navigator.dispatch.bind(null, resetAction), 500)
  */
}

export function goBack () {
  if (config.navigator) {
    let action = NavigationActions.back({})
    config.navigator.dispatch(action)
  }
}
