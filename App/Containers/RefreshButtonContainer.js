import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../Themes/ApplicationStyles'
import { Colors } from '../Themes/'
import RealtimeActions from '../Redux/RealtimeRedux'

const propTypes = {
  realtime: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export class RefreshButtonContainer extends Component {
  constructor () {
    super()
    this.state = {
      refreshing: false
    }
    this.onPress = this.onPress.bind(this)
  }

  onPress () {
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
    if (this.state.refreshing) {
      return <ActivityIndicator style={{ marginRight: 12 }} />
    }

    return (
      <TouchableOpacity>
        <Icon
          name={'refresh'}
          color={Colors.snow}
          style={ApplicationStyles.refreshIcon}
          onPress={this.onPress}
          size={35} />
      </TouchableOpacity>
    )
  }
}

RefreshButtonContainer.propTypes = propTypes

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

export default connect(mapStateToProps, mapDispatchToProps)(RefreshButtonContainer)
