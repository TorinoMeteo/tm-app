import React from 'react'
import { StackNavigator } from 'react-navigation'
import DrawerIcon from '../Components/DrawerIcon'
import HomeScreen from '../Containers/HomeScreen'
import ChooseFavouriteStationScreen from '../Containers/ChooseFavouriteStationScreen'
import { Colors } from '../Themes/'

import styles from './Styles/NavigationStyles'

const HomeStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <DrawerIcon navigation={navigation} />
      })
    },
    ChooseFavouriteStationScreen: {
      screen: ChooseFavouriteStationScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Scegli la stazione preferita'
      })
    }
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'TorinoMeteo',
      headerStyle: styles.header,
      headerTintColor: Colors.snow,
      headerTitleStyle: styles.title
    })
  }
)

export default HomeStack
