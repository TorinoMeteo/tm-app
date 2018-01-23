import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as NavigationService from '../Services/NavigationService'
import { ScrollView, Text, Image, View, ActivityIndicator } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

const propTypes = {
  realtime: PropTypes.object.isRequired,
  forecast: PropTypes.object.isRequired
}

class LaunchScreen extends React.Component {
  checkData () {
    if (this.props.realtime.data && this.props.realtime.data.length && this.props.forecast) {
      console.log('calling MainScreen')
      NavigationService.resetTo('MainScreen')
    }
  }

  componentDidUpdate () {
    this.checkData()
  }

  componentWillMount () {
    this.checkData()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <ActivityIndicator />
            <Text style={styles.startupPar}>Bentornato!</Text>
          </View>

        </ScrollView>

        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <Image source={Images.ready} style={{ flex: 1, resizeMode: 'stretch' }} />
        </View>
      </View>
    )
  }
}

LaunchScreen.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    realtime: state.realtime,
    forecast: state.forecast
  }
}

export default connect(mapStateToProps, null)(LaunchScreen)
