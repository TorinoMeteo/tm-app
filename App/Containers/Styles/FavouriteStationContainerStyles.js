import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  noStationContainer: {
    marginTop: Metrics.marginVertical
  },
  noStationCardContent: {
    padding: Metrics.mediumPadding
  },
  noStationText: {
    marginBottom: Metrics.marginVertical
  }
})
