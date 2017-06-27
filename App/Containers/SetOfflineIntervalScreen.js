import React, { PropTypes } from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView, Picker } from 'react-native'
import { connect } from 'react-redux'
import { Settings } from '../Db/Models'
import * as NavigationService from '../Services/NavigationService'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SetOfflineIntervalScreenStyle'

const propTypes = {
  navigation: PropTypes.object
}

class SetOfflineIntervalScreen extends React.Component {
  constructor () {
    super()
    this.settings = new Settings()
    let appSettings = this.settings.get()
    let offlineInterval
    if (appSettings.length) {
      offlineInterval = appSettings[0].offlineInterval
    }
    this.state = {
      offlineInterval: offlineInterval || 30
    }
  }

  setOfflineInterval (interval) {
    this.settings.updateOfflineInterval(interval)
    this.setState({ offlineInterval: interval })
    this.props.navigation.state.params.refresh()
    NavigationService.goBack()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.section}>
            <Text>
              Questo parametro ti permette di configurare quanto tempo deve passare dall'ultima
              misura della stazione realtime prima che venga considerata offline.
            </Text>
            <Picker
              selectedValue={this.state.offlineInterval}
              onValueChange={(itemValue, itemIndex) => this.setOfflineInterval(itemValue)}>
              <Picker.Item label='5 min' value={5} />
              <Picker.Item label='10 min' value={10} />
              <Picker.Item label='15 min' value={15} />
              <Picker.Item label='30 min' value={30} />
              <Picker.Item label='1 ora' value={60} />
              <Picker.Item label='2 ore' value={120} />
              <Picker.Item label='3 ore' value={180} />
            </Picker>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

SetOfflineIntervalScreen.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetOfflineIntervalScreen)
