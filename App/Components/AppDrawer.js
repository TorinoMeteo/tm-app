/**
 * AppDrawer
 * @flow
 */
import React, { Component } from 'react'
import {
  Drawer
} from 'react-native-material-ui'
import { Image } from 'react-native'
import { Images } from '../Themes'
import * as NavigationService from '../Services/NavigationService'

export default class AppDrawer extends Component {
  render () {
    return (
      <Drawer>
        <Drawer.Header>
          <Image source={Images.logo} />
        </Drawer.Header>
        <Drawer.Section
          divider
          items={[
            {
              icon: 'home',
              value: 'Home',
              onPress: () => {
                NavigationService.navigate('HomeScreen')
              }
            },
            {
              icon: 'wb-sunny',
              value: 'Previsioni',
              onPress: () => {
                NavigationService.navigate('ForecastScreen')
              }
            },
            {
              icon: 'room',
              value: 'Mappa',
              onPress: () => {
                NavigationService.navigate('MapScreen')
              }
            },
            {
              icon: 'view-list',
              value: 'Rete',
              onPress: () => {
                NavigationService.navigate('NetScreen')
              }
            },
            {
              icon: 'panorama',
              value: 'Webcam',
              onPress: () => {
                NavigationService.navigate('WebcamScreen')
              }
            },
            {
              icon: 'settings',
              value: 'Impostazioni',
              onPress: () => {
                NavigationService.navigate('SettingsScreen')
              }
            },
            {
              icon: 'info',
              value: 'Credits',
              onPress: () => {
                NavigationService.navigate('CreditsScreen')
              }
            }
          ]}
        />
      </Drawer>
    )
  }
}
