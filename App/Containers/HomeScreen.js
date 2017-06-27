import React, { PropTypes } from 'react'
import { RefreshControl, ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import FavouriteStationContainer from './FavouriteStationContainer'
import RealtimeActions from '../Redux/RealtimeRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

const propTypes = {
  realtime: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

class HomeScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      refreshing: false
    }
    this.onRefresh = this.onRefresh.bind(this)
  }

  onRefresh () {
    this.props.dispatch(RealtimeActions.realtimeRequest())
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.realtime.fetching && !this.props.realtime.fetching) {
      this.setState({ refreshing: true })
    } else if (this.state.refreshing) {
      this.setState({ refreshing: false })
    }
  }

  render () {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        <KeyboardAvoidingView behavior='position'>
          <FavouriteStationContainer />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

HomeScreen.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    realtime: state.realtime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => dispatch(action)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
