import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  rightIcon: {
    marginRight: Metrics.marginHorizontal
  }
})
