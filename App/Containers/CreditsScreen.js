import React from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import images from '../Themes/Images'
import Communications from 'react-native-communications'
import Hr from 'react-native-hr'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CreditsScreenStyle'

class CreditsScreen extends React.Component {
  render () {
    return (
      <View style={[styles.mainContainer, styles.creditsContainer]}>
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <Image source={images.ready} style={{ flex: 1, resizeMode: 'stretch' }} />
        </View>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.section}>
              <Text style={[styles.sectionText, styles.versionPar]}>TorinoMeteo v1.2.0</Text>
              <Text style={styles.sectionText}>Sviluppata da abidibo</Text>
              <View style={styles.centered}>
                <TouchableOpacity onPress={() => Communications.web('https://www.abidibo.net', true)}>
                  <Image source={images.abidibo} />
                </TouchableOpacity>
              </View>
              <Text style={styles.sectionText}>grazie all'infinita disponibilità di</Text>
              <View style={[styles.centered, { marginBottom: 30 }]}>
                <TouchableOpacity onPress={() => Communications.web('https://www.otto.to.it', true)}>
                  <Image source={images.otto} />
                </TouchableOpacity>
              </View>
              <Hr lineColor={'#cd3200'} />
              <View style={styles.centered}>
                <Text style={styles.sectionTextSmall}>
                  <Text>Le icone metereologiche sono prese dalle previsioni meteorologiche di </Text>
                  <Text style={styles.link} onPress={() => Communications.web('https://www.yr.no/', true)}>Yr</Text>
                  <Text> fornite da Meteorological Institute e NRK.</Text>
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
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
