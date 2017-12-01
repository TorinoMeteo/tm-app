import React from 'react'
import { View, WebView } from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/MapScreenStyle'

class MapScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <WebView source={{ uri: 'https://map.torinometeo.org?android' }} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
