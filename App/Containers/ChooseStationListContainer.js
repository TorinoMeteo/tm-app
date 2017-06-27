import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { ListItem, Button } from 'react-native-material-ui'
import { Settings } from '../Db/Models'
import * as NavigationService from '../Services/NavigationService'

const propTypes = {
  realtime: PropTypes.array
}

export class StationListContainer extends Component {
  componentDidMount () {
    this.settings = new Settings()
  }

  setStation (id) {
    return () => {
      this.settings.updateStation(id)
      NavigationService.resetTo('MainScreen')
    }
  }

  render () {
    let stations = []
    this.props.realtime.forEach((obj) => {
      stations.push(obj.station)
    })
    return (
      <View>
        {stations.map((obj) => {
          return (
            <ListItem
              divider
              centerElement={{
                primaryText: obj.name,
                secondaryText: obj.province.name + ', ' + obj.region.name
              }}
              rightElement={
                <Button
                  primary
                  text='seleziona'
                  onPress={this.setStation(obj.id)}
                />
              }
              key={obj.id}
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
    realtime: state.realtime.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationListContainer)
