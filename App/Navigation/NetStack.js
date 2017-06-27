import React from 'react'
import { StackNavigator } from 'react-navigation'
import DrawerIcon from '../Components/DrawerIcon'
import NetScreen from '../Containers/NetScreen'
import StationDetailScreen from '../Containers/StationDetailScreen'
import { Colors } from '../Themes/'

import styles from './Styles/NavigationStyles'

const NetStack = StackNavigator(
  {
    NetScreen: {
      screen: NetScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <DrawerIcon navigation={navigation} />
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
    initialRouteName: 'NetScreen',
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Rete realtime',
      headerStyle: styles.header,
      headerTintColor: Colors.snow,
      headerTitleStyle: styles.title
    })
  }
)

export default NetStack
