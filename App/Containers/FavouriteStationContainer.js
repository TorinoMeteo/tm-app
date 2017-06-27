import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Button, Card } from 'react-native-material-ui'
import { Settings } from '../Db/Models'
import StationDataCard from '../Components/StationDataCard'
import * as NavigationService from '../Services/NavigationService'
import styles from './Styles/FavouriteStationContainerStyles.js'

const propTypes = {
  realtimeData: PropTypes.array
}

export class FavouriteStationContainer extends Component {
  constructor () {
    super()

    this.state = {
      stationId: null
    }
  }

  componentDidMount () {
    let settings = new Settings().get()
    if (settings.length) {
      this.setState({
        stationId: settings[0].favouriteStation || null
      })
    }
  }

  render () {
    if (!this.state.stationId) {
      return (
        <View style={styles.noStationContainer}>
          <Card>
            <View style={styles.noStationCardContent}>
              <Text style={styles.noStationText}>
                In questo spazio puoi vedere i dati realtime di una stazione a tuo piacimento
              </Text>
              <Button
                raised
                primary
                text='scegli stazione'
                onPress={() => NavigationService.navigate('ChooseFavouriteStationScreen')}
              />
            </View>
          </Card>
        </View>
      )
    } else {
      let data = this.props.realtimeData.filter(
        (obj) => obj.station.id === this.state.stationId
      )[0]
      return (
        <StationDataCard data={data} />
      )
    }
  }
}

FavouriteStationContainer.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    realtimeData: state.realtime.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteStationContainer)
