import React from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import images from '../Themes/Images'
import Communications from 'react-native-communications'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CreditsScreenStyle'

class CreditsScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={[styles.container, styles.creditsContainer]}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.section}>
              <Text style={[styles.sectionText, styles.versionPar]}>TorinoMeteo v1.1.0.rc-4</Text>
              <Text style={styles.sectionText}>Sviluppata da abidibo</Text>
              <View style={styles.centered}>
                <TouchableOpacity onPress={() => Communications.web('https://www.abidibo.net', true)}>
                  <Image source={images.abidibo} />
                </TouchableOpacity>
              </View>
              <Text style={styles.sectionText}>grazie all'infinita disponibilità di</Text>
              <View style={styles.centered}>
                <TouchableOpacity onPress={() => Communications.web('https://www.otto.to.it', true)}>
                  <Image source={images.otto} />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <Image source={images.ready} style={{ flex: 1, resizeMode: 'stretch' }} />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreditsScreen)
