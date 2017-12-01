import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text, WebView, Image } from 'react-native'
import { BottomNavigation } from 'react-native-material-ui'
import MapView from 'react-native-maps'
import moment from 'moment'
import styles from './Styles/StationDetailStyles'
import FAIcon from 'react-native-vector-icons/FontAwesome'
var icon = require('react-native-iconic-font/weathericons')

const propTypes = {
  stationData: PropTypes.object.isRequired
}

class StationDetail extends Component {
  constructor () {
    super()

    this.state = {
      active: 'realtime'
    }
  }

  content () {
    if (this.state.active === 'info') {
      return this.mainContent()
    } else if (this.state.active === 'map') {
      return this.mapContent()
    } else {
      return this.realtimeContent()
    }
  }

  mainContent () {
    let station = this.props.stationData.station
    let imageAndDescription = `<style>.img-responsive, img { max-width: 100%; } h2 { margin-top: 20px; }</style>`
    imageAndDescription += `<div>${station.description}</div>`
    imageAndDescription += `<div><img style="max-width: 100%" src="${station.image_url}" /></div>`
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ html: imageAndDescription }} />
      </View>
    )
  }

  mapContent () {
    let station = this.props.stationData.station
    let lat = parseFloat(station.lat)
    let lng = parseFloat(station.lng)
    return (
      <ScrollView>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={{
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.115,
              longitudeDelta: 0.1121
            }}
          >
            <MapView.Marker
              coordinate={{ latitude: lat, longitude: lng }}
            />
          </MapView>
        </View>
      </ScrollView>
    )
  }

  realtimeContent () {
    let data = this.props.stationData
    let webcamSection = null
    if (this.props.stationData.station.webcam) {
      let url = this.props.stationData.station.webcam_url
      webcamSection = (
        <View>
          <Image
            style={{ height: 200 }}
            source={{ uri: url + '?random=' + new Date().getTime() }}
            key={{ url }}
          />
        </View>
      )
    }

    let weatherIconView = null
    if (data.weather_icon) {
      weatherIconView = (
        <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 20 }}>
          <Image source={{ uri: data.weather_icon.icon }} style={{ height: 50, width: 50 }} />
        </View>
      )
    }

    return (
      <ScrollView style={{ marginLeft: 16, marginRight: 16, marginTop: 16 }}>
        <View style={styles.dateContainer}>
          <FAIcon name='clock-o' />
          <Text>{' '}{moment(data.datetime).format('LLL')}</Text>
        </View>
        {weatherIconView}
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureData}>{icon('thermometer') + ' ' + data.temperature + '°C' + ' '}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'red' }} ><FAIcon name='arrow-up' /> {data.temperature_max + '°C' + ' '}</Text>
            <Text style={{ color: 'blue' }} ><FAIcon name='arrow-down' /> {data.temperature_min + '°C'}</Text>
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
        <View style={{ flex: 1 }}>
          {webcamSection}
        </View>
      </ScrollView>
    )
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        {this.content()}
        <BottomNavigation active={this.state.active} hidden={false}>
          <BottomNavigation.Action
            key='realtime'
            icon='query-builder'
            label='realtime'
            style={{ container: { minWidth: null } }}
            onPress={() => this.setState({ active: 'realtime' })}
          />
          <BottomNavigation.Action
            key='info'
            icon='info'
            label='informazioni'
            style={{ container: { minWidth: null } }}
            onPress={() => this.setState({ active: 'info' })}
          />
          <BottomNavigation.Action
            key='map'
            icon='room'
            label='mappa'
            style={{ container: { minWidth: null } }}
            onPress={() => this.setState({ active: 'map' })}
          />
        </BottomNavigation>
      </View>
    )
  }
}

StationDetail.propTypes = propTypes

export default StationDetail
