import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as NavigationService from '../Services/NavigationService'
import { Settings } from '../Db/Models'
import moment from 'moment'

import styles from './Styles/StationListContainerStyles.js'

const propTypes = {
  realtimeData: PropTypes.array
}

export class StationListContainer extends Component {
  constructor () {
    super()
    let settings = new Settings().get()
    if (settings.length) {
      this.offlineInterval = settings[0].offlineInterval * 60
    }
  }

  render () {
    let stations = []
    this.props.realtimeData.forEach((obj) => {
      stations.push(obj.station)
    })
    return (
      <View>
        {this.props.realtimeData.map((obj) => {
          let station = obj.station
          let temperature
          if (moment(obj.datetime) < moment().subtract(this.offlineInterval || 30, 'minutes')) {
            temperature = 'N.D.'
          } else {
            temperature = obj.temperature + '°'
          }
          return (
            <ListItem
              divider
              leftElement={
                <Text>{temperature}</Text>
              }
              centerElement={{
                primaryText: station.name,
                secondaryText: obj.station.name + ', ' + station.region.name
              }}
              rightElement={<Icon name='angle-right' size={30} style={styles.rightIcon} />}
              key={station.id}
              onPress={() => NavigationService.navigate('StationDetailScreen', {
                title: station.name,
                stationData: obj
              })}
            />
          )
        })}
      </View>
    )
  }
}

StationListContainer.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    realtimeData: state.realtime.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationListContainer)
