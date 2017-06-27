import React from 'react'
import { ScrollView, Image, Text, View, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import Web from 'react-native-webview2'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WebcamDetailScreenStyle'

const { width, height } = Dimensions.get('window')

class WebcamDetailScreen extends React.Component {
  constructor () {
    super()
    this.onLayout = this.onLayout.bind(this)

    this.state = {
      width: width,
      height: height
    }
  }

  onLayout (e) {
    const { width, height } = Dimensions.get('window')
    this.setState({ width, height })
  }

  render () {
    let w = this.props.navigation.state.params.webcam
    let imageHeight = this.state.width > this.state.height ? this.state.height : this.state.width

    if (w.active === false) {
      return (
        <View style={styles.inactiveView}>
          <Text>La webcam in questo momento è offline</Text>
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
        <View
          style={{ backgroundColor: 'black', height: imageHeight }}
          onLayout={this.onLayout}
        >
          <Image
            source={{ uri: w.url + '?' + new Date().getTime() }}
            resizeMode='contain'
            style={{ width: null, height: imageHeight }}
          />
        </View>
        <Web source={{ html: w.description.replace(/<a.*?>.*?<\/a>/, '') }} />
      </ScrollView>
    )
  }
}

WebcamDetailScreen.propTypes = {
  navigation: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebcamDetailScreen)
