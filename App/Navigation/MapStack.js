import React from 'react'
import { StackNavigator } from 'react-navigation'
import DrawerIcon from '../Components/DrawerIcon'
import MapScreen from '../Containers/MapScreen'
import StationDetailScreen from '../Containers/StationDetailScreen'
import RefreshButtonContainer from '../Containers/RefreshButtonContainer'
import { Colors } from '../Themes/'

import styles from './Styles/NavigationStyles'

const MapStack = StackNavigator(
  {
    MapScreen: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <DrawerIcon navigation={navigation} />,
        headerRight: <RefreshButtonContainer />
      })
    },
    StationDetailScreen: {
      screen: StationDetailScreen,
      navigationOptions: ({ navigation }) => {
        return ({
          headerTitle: navigation.state.params.title
        })
      }
    }
  },
  {
    initialRouteName: 'MapScreen',
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Mappa realtime',
      headerStyle: styles.header,
      headerTintColor: Colors.snow,
      headerTitleStyle: styles.title
    })
  }
)

export default MapStack
