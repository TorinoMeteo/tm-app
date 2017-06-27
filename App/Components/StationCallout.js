import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/StationCalloutStyles'
import moment from 'moment'
var icon = require('react-native-iconic-font/weathericons')

const propTypes = {
  data: PropTypes.object
}

class StationCallout extends Component {
  render () {
    let data = this.props.data
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{data.station.name}</Text>
        <Text style={styles.data}>{icon('time-1') + ' ' + moment(data.datetime).format('LLL')}</Text>
        <Text style={styles.data}>{icon('thermometer') + ' ' + data.temperature + ' °C'}</Text>
        <Text style={styles.data}>{icon('barometer') + ' ' + data.pressure + ' hPa'}</Text>
        <Text style={styles.data}>{icon('raindrops') + ' ' + data.rain_rate + ' mm/h'}</Text>
        <Text style={styles.data}>{icon('umbrella') + ' ' + data.rain + ' mm' + ' '}</Text>
        <Text style={styles.data}>{icon('windy') + ' ' + data.wind_strength + ' Km/h ' + data.wind_dir_text}</Text>
      </View>
    )
  }
}

StationCallout.propTypes = propTypes

export default StationCallout
