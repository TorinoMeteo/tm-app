import React, { PropTypes } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import StationCallout from '../Components/StationCallout'
import { Settings } from '../Db/Models'
import moment from 'moment'
import * as NavigationService from '../Services/NavigationService'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MapScreenStyle'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height

const propTypes = {
  realtimeData: PropTypes.array.isRequired
}

class MapScreen extends React.Component {
  constructor () {
    super()
    this.onLayout = this.onLayout.bind(this)

    this.state = {
      width: width,
      height: height
    }

    let settings = new Settings().get()
    if (settings.length) {
      this.offlineInterval = settings[0].offlineInterval * 60
    }
  }

  onLayout (e) {
    const { width, height } = Dimensions.get('window')
    this.setState({ width, height })
  }

  markerStyles (q, v) {
    let circle = {
      borderWidth: 1,
      borderColor: 'black',
      width: 30,
      height: 30,
      borderRadius: 30 / 2
    }

    let text = {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 12,
      marginTop: 4
    }

    if (v === 'N.D.') {
      circle.backgroundColor = '#000'
      text.color = 'white'
      return { circle, text }
    }

    if (q === 'temperature') {
      if (v >= 30) {
        circle.backgroundColor = '#d62732'
        text.color = 'white'
      } else if (v >= 20) {
        circle.backgroundColor = '#f96636'
        text.color = 'white'
      } else if (v >= 10) {
        circle.backgroundColor = '#f5e041'
        text.color = 'white'
      } else if (v >= 0) {
        circle.backgroundColor = '#d0d1ec'
        text.color = 'white'
      } else if (v >= -10) {
        circle.backgroundColor = '#898ecf'
        text.color = 'white'
      } else {
        circle.backgroundColor = '#373ba9'
        text.color = 'white'
      }
    }

    return { circle, text }
  }

  render () {
    let data = this.props.realtimeData
    let mapStyles = {
      width: this.state.width,
      height: this.state.height
    }

    return (
      <View
        onLayout={this.onLayout}
        style={styles.container}>
        <MapView
          style={mapStyles}
          initialRegion={{
            latitude: 45.81118744420205,
            longitude: 7.81529925763607,
            latitudeDelta: 6.934377154002867,
            longitudeDelta: 6.934377154002867 * ASPECT_RATIO
          }}
        >
          {data.map(m => {
            let temperature
            if (moment(m.datetime) < moment().subtract(this.offlineInterval || 30, 'minutes')) {
              temperature = 'N.D.'
            } else {
              temperature = parseFloat(m.temperature)
            }
            let markerStyles = this.markerStyles('temperature', temperature)
            console.log(markerStyles)
            return (
              <MapView.Marker
                coordinate={{ latitude: parseFloat(m.station.lat), longitude: parseFloat(m.station.lng) }}
                title={m.station.name}
                key={m.station.id}
              >
                <View style={markerStyles.circle}>
                  <Text style={markerStyles.text}>{temperature}</Text>
                </View>
                <MapView.Callout
                  onPress={() => NavigationService.navigate('StationDetailScreen', {
                    title: m.station.name,
                    stationData: m
                  })}
                >
                  <StationCallout data={m} />
                </MapView.Callout>
              </MapView.Marker>
            )
          })}
        </MapView>
      </View>
    )
  }
}

MapScreen.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    realtimeData: state.realtime.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
