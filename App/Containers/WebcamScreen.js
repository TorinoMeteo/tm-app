import React, { PropTypes } from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from 'react-native-material-ui'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as NavigationService from '../Services/NavigationService'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WebcamScreenStyle'

const propTypes = {
  webcams: PropTypes.array
}

class WebcamScreen extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        {this.props.webcams.map((w) => {
          return (
            <ListItem
              divider
              key={w.id}
              centerElement={{
                primaryText: w.name,
                secondaryText: w.technology
              }}
              rightElement={
                <Icon
                  name='angle-right'
                  size={30}
                  style={styles.detailIcon}
                />
              }
              onPress={() => NavigationService.navigate('WebcamDetailScreen', {
                webcam: w
              })}
            />
          )
        })}
      </ScrollView>
    )
  }
}

WebcamScreen.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    webcams: state.webcams.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebcamScreen)
