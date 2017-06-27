import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    padding: Metrics.mediumPadding,
    width: 200
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: Metrics.mediumPadding
  },
  data: {
    fontFamily: 'weathericons'
  }
})
