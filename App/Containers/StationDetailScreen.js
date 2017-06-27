import React, { PropTypes } from 'react'
// import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import StationDetail from '../Components/StationDetail'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/StationDetailScreenStyle'

const propTypes = {
  navigation: PropTypes.object.isRequired
}

class StationDetailScreen extends React.Component {
  render () {
    return (
      <StationDetail stationData={this.props.navigation.state.params.stationData} />
    )
  }
}

StationDetailScreen.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationDetailScreen)
