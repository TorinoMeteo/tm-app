import React from 'react'
import { StackNavigator } from 'react-navigation'
import DrawerIcon from '../Components/DrawerIcon'
import WebcamScreen from '../Containers/WebcamScreen'
import WebcamDetailScreen from '../Containers/WebcamDetailScreen'
import { Colors } from '../Themes/'

import styles from './Styles/NavigationStyles'

const WebcamStack = StackNavigator(
  {
    WebcamScreen: {
      screen: WebcamScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <DrawerIcon navigation={navigation} />
      })
    },
    WebcamDetailScreen: {
      screen: WebcamDetailScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.webcam.name
      })
    }
  },
  {
    initialRouteName: 'WebcamScreen',
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Webcam',
      headerStyle: styles.header,
      headerTintColor: Colors.snow,
      headerTitleStyle: styles.title
    })
  }
)

export default WebcamStack
