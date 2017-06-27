import React, { PropTypes } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Settings } from '../Db/Models'
import * as NavigationService from '../Services/NavigationService'
import { ListItem, Button } from 'react-native-material-ui'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SettingsScreenStyle'

const propTypes = {
  realtimeData: PropTypes.array.isRequired
}

class SettingsScreen extends React.Component {
  constructor () {
    super()

    this.state = {
      stationId: null,
      offlineInterval: null
    }

    this.refresh = this.refresh.bind(this)
  }

  componentDidMount () {
    this.refresh()
  }

  refresh () {
    let settings = new Settings().get()
    if (settings.length) {
      this.setState({
        stationId: settings[0].favouriteStation || null,
        offlineInterval: settings[0].offlineInterval
      })
    }
  }

  render () {
    let station
    if (this.state.stationId) {
      station = this.props.realtimeData.filter((obj) => obj.station.id === this.state.stationId)[0]
    }
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <ListItem
            divider
            centerElement={{
              primaryText: 'Stazione favorita',
              secondaryText: station ? station.station.name : 'da impostare'
            }}
            rightElement={
              <Button
                primary
                text={station ? 'modifica' : 'imposta'}
                onPress={() => NavigationService.navigate('ChooseFavouriteStationSettingsScreen')}
              />
            }
          />
          <ListItem
            divider
            centerElement={{
              primaryText: 'Offline interval',
              secondaryText: (this.state.offlineInterval || 30) + ' min'
            }}
            rightElement={
              <Button
                primary
                text={'modifica'}
                onPress={() => NavigationService.navigate('SetOfflineIntervalScreen', { refresh: this.refresh })}
              />
            }
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

SettingsScreen.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    realtimeData: state.realtime.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
