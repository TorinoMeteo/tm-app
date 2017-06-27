import React from 'react'
import { StackNavigator } from 'react-navigation'
import DrawerIcon from '../Components/DrawerIcon'
import CreditsScreen from '../Containers/CreditsScreen'
import { Colors } from '../Themes/'

import styles from './Styles/NavigationStyles'

const CreditsStack = StackNavigator(
  {
    CreditsScreen: {
      screen: CreditsScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <DrawerIcon navigation={navigation} />
      })
    }
  },
  {
    initialRouteName: 'CreditsScreen',
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Credits',
      headerStyle: styles.header,
      headerTintColor: Colors.snow,
      headerTitleStyle: styles.title
    })
  }
)

export default CreditsStack
