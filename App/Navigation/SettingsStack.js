import React from 'react'
import { StackNavigator } from 'react-navigation'
import DrawerIcon from '../Components/DrawerIcon'
import SettingsScreen from '../Containers/SettingsScreen'
import ChooseFavouriteStationScreen from '../Containers/ChooseFavouriteStationScreen'
import SetOfflineIntervalScreen from '../Containers/SetOfflineIntervalScreen'
import { Colors } from '../Themes/'

import styles from './Styles/NavigationStyles'

const SettingsStack = StackNavigator(
  {
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <DrawerIcon navigation={navigation} />
      })
    },
    ChooseFavouriteStationSettingsScreen: {
      screen: ChooseFavouriteStationScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Scegli la stazione preferita'
      })
    },
    SetOfflineIntervalScreen: {
      screen: SetOfflineIntervalScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Imposta offline interval'
      })
    }
  },
  {
    initialRouteName: 'SettingsScreen',
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'TorinoMeteo',
      headerStyle: styles.header,
      headerTintColor: Colors.snow,
      headerTitleStyle: styles.title
    })
  }
)

export default SettingsStack
