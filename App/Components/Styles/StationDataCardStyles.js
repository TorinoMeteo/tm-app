import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  textContainer: {
    paddingLeft: Metrics.mediumPadding,
    paddingBottom: Metrics.smallPadding,
    paddingRight: Metrics.mediumPadding,
    paddingTop: Metrics.smallPadding
  },
  image: {
    height: 180
  },
  flexHorizontal: {
    flexDirection: 'row'
  },
  stationHeader: {
    padding: Metrics.mediumPadding,
    paddingBottom: 0,
    justifyContent: 'flex-start'
  },
  stationTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginRight: Metrics.marginHorizontal
  },
  temperatureData: {
    fontSize: 34,
    fontFamily: 'weathericons',
    paddingTop: Metrics.smallPadding
  },
  data: {
    fontFamily: 'weathericons'
  }
})
