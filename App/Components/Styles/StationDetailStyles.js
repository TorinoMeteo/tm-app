import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

const window = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  textContainer: {
    paddingLeft: Metrics.mediumPadding,
    paddingBottom: Metrics.smallPadding,
    paddingRight: Metrics.mediumPadding,
    paddingTop: Metrics.smallPadding
  },
  flexHorizontal: {
    flexDirection: 'row'
  },
  temperatureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  temperatureData: {
    fontSize: 38,
    fontFamily: 'weathericons',
    paddingTop: Metrics.smallPadding
  },
  data: {
    fontFamily: 'weathericons'
  },
  mapContainer: {
    position: 'relative',
    height: window.height,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})
