import React, { PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import { Card } from 'react-native-material-ui'
import styles from './Styles/StationDataCardStyles.js'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
var itLocale = require('moment/locale/it')

var icon = require('react-native-iconic-font/weathericons')

const propTypes = {
  data: PropTypes.object.isRequired
}

const StationDataCard = (props) => {
  let data = props.data
  return (
    <View>
      <Card>
        <View style={styles.stationHeader}>
          <Image source={{ uri: data.station.image_url }} style={styles.image} resizeMode='cover' />
          <View style={{ flexWrap: 'wrap', flexDirection: 'column', flex: 0.8 }}>
            <Text style={[styles.stationTitle, { flexWrap: 'wrap' }]}>
              {data.station.name}
            </Text>
            <Text>{moment(data.datetime).locale('it', itLocale).format('LLL')}</Text>
          </View>
        </View>
        <View style={[styles.textContainer, styles.flexHorizontal]}>
          <Text style={styles.temperatureData}>
            {icon('thermometer') + ' ' + data.temperature + '°C'}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'red' }} >
              <FAIcon name='arrow-up' />
              {data.temperature_max + '°C' + ' ' + data.temperature_max_time.substr(0, 5)}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'blue' }} >
              <FAIcon name='arrow-down' />
              {data.temperature_min + '°C' + ' ' + data.temperature_min_time.substr(0, 5)}
            </Text>
          </View>
        </View>
        <View style={[styles.textContainer, styles.flexHorizontal, { justifyContent: 'space-between' }]}>
          <View>
            <Text style={styles.data}>
              {icon('barometer') + ' ' + data.pressure + ' hPa'}
            </Text>
            <Text style={styles.data}>
              {icon('humidity') + ' ' + data.relative_humidity + ' %'}
            </Text>
          </View>
          <View>
            <Text style={styles.data}>
              {icon('raindrops') + ' ' + data.rain_rate + ' mm/h'}
            </Text>
            <Text style={styles.data}>
              {icon('umbrella') + ' ' + data.rain + ' mm'}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  )
}

StationDataCard.propTypes = propTypes
export default StationDataCard
