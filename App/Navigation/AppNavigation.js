import React from 'react'
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import NoInternetConnectionScreen from '../Containers/NoInternetConnectionScreen'
import AppDrawer from '../Components/AppDrawer'

import HomeStack from './HomeStack'
import ForecastStack from './ForecastStack'
import SettingsStack from './SettingsStack'
import NetStack from './NetStack'
import MapStack from './MapStack'
import WebcamStack from './WebcamStack'
import CreditsStack from './CreditsStack'

import styles from './Styles/NavigationStyles'

// main screen (after splash) routes
const MainNavigator = DrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'TorinoMeteo',
        title: 'TorinoMeteo'
      })
    },
    SettingsStack: {
      screen: SettingsStack,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Impostazioni',
        title: 'Impostazioni'
      })
    },
    ForecastStack: {
      screen: ForecastStack,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Previsioni',
        title: 'Previsioni'
      })
    },
    NetStack: {
      screen: NetStack,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Rete realtime',
        title: 'Rete realtime'
      })
    },
    MapStack: {
      screen: MapStack,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Mappa realtime',
        title: 'Mappa realtime'
      })
    },
    WebcamStack: {
      screen: WebcamStack,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Webcam',
        title: 'Webcam'
      })
    },
    CreditsStack: {
      screen: CreditsStack,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Credits',
        title: 'Credits'
      })
    }
  },
  {
    contentComponent: props => <AppDrawer {...props} />
  }
)

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  NoInternetConnectionScreen: { screen: NoInternetConnectionScreen },
  MainScreen: { screen: MainNavigator }
}, {
  // Default config for all screens
  // initialRouteName: 'LaunchScreen',
  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const navigateOnce = (getStateForAction) => {
  return (action, state) => {
    const { type, routeName } = action
    return (
      state &&
      type === NavigationActions.NAVIGATE &&
      routeName === state.routes[state.routes.length - 1].routeName
    ) ? null : getStateForAction(action, state)
    // you might want to replace 'null' with 'state' if you're using redux (see comments below)
  }
}

// avoid double rendering on double click
PrimaryNav.router.getStateForAction = navigateOnce(PrimaryNav.router.getStateForAction)
// uncommentig next causes DrawerOpen on hambuger press to fail
// MainNavigator.router.getStateForAction = navigateOnce(MainNavigator.router.getStateForAction)
HomeStack.router.getStateForAction = navigateOnce(HomeStack.router.getStateForAction)
SettingsStack.router.getStateForAction = navigateOnce(SettingsStack.router.getStateForAction)
ForecastStack.router.getStateForAction = navigateOnce(ForecastStack.router.getStateForAction)
NetStack.router.getStateForAction = navigateOnce(NetStack.router.getStateForAction)
WebcamStack.router.getStateForAction = navigateOnce(WebcamStack.router.getStateForAction)
SettingsStack.router.getStateForAction = navigateOnce(SettingsStack.router.getStateForAction)
CreditsStack.router.getStateForAction = navigateOnce(CreditsStack.router.getStateForAction)

export default PrimaryNav
