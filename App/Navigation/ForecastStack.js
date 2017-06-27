import React from 'react'
import { StackNavigator } from 'react-navigation'
import DrawerIcon from '../Components/DrawerIcon'
import ForecastScreen from '../Containers/ForecastScreen'
import { Colors } from '../Themes/'

import styles from './Styles/NavigationStyles'

const ForecastStack = StackNavigator(
  {
    ForecastScreen: {
      screen: ForecastScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <DrawerIcon navigation={navigation} />
      })
    }
  },
  {
    initialRouteName: 'ForecastScreen',
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Previsioni',
      headerStyle: styles.header,
      headerTintColor: Colors.snow,
      headerTitleStyle: styles.title
    })
  }
)

export default ForecastStack
