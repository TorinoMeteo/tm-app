import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  creditsContainer: {
    backgroundColor: Colors.launchBg
  },
  centered: {
    alignItems: 'center'
  },
  versionPar: {
    color: Colors.yellow,
    fontSize: 22
  }
})
