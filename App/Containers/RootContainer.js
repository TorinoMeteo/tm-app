import React, { Component, PropTypes } from 'react'
import { View, StatusBar, NetInfo } from 'react-native'
import Navigation from '../Navigation/AppNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import * as NavigationService from '../Services/NavigationService'
import networkActions from '../Redux/NetworkRedux'
import { ThemeProvider } from 'react-native-material-ui'
import MaterialTheme from '../Themes/Material'

// Styles
import styles from './Styles/RootContainerStyles'

const propTypes = {
  network: PropTypes.object.isRequired,
  startup: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

class RootContainer extends Component {
  checkInternetConnection (props) {
    let network = props ? props.network : this.props.network
    if (network.isConnected === false) {
      // reset navigation, otherwise after going to NoInternetConnection component,
      // the LaunchScreen remains active, its DidUpdate method gets fired on succesfull retrieving
      // of categories and user is redirected to home page
      NavigationService.resetTo('NoInternetConnectionScreen')
    }
  }

  // Attach listener to check for internet connection change
  componentWillMount () {
    NetInfo.isConnected.addEventListener(
      'change',
      (isConnected) => {
        this.props.dispatch(networkActions.setNetworkConnection(isConnected))
      }
    )
  }

  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      // startup sagas
      console.log('SAGAS', 'STARTUP', 'startup function call')
      this.props.startup()
    }

    this.checkInternetConnection()

    NavigationService.setNavigator(this.navigator)
  }

  // Checks for internet connection changes
  componentWillReceiveProps (nextProps) {
    this.checkInternetConnection(nextProps)
  }

  render () {
    console.log('THEME', MaterialTheme)
    return (
      <ThemeProvider uiTheme={MaterialTheme}>
        <View style={styles.applicationView}>
          <StatusBar barStyle='light-content' />
          <Navigation
            ref={nav => { this.navigator = nav }}
          />
        </View>
      </ThemeProvider>
    )
  }
}

RootContainer.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    network: state.network
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  dispatch: (action) => dispatch(action)
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
