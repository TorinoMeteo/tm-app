import React, { PropTypes } from 'react'
import { WebView } from 'react-native'
import moment from 'moment'

var itLocale = require('moment/locale/it')

const propTypes = {
  forecast: PropTypes.object.isRequired
}

const DayForecast = (props) => {
  let d = props.forecast
  let html = `<style>.img-responsive { max-width: 100%; } h2 { margin-top: 20px; }</style>`
  html += `<h2>${moment(d.date).locale('it', itLocale).format('LL')}</h2>`
  html += d.text
  html += '<p><b>00:00 - 12:00</b></p>'
  html += `<p><img class="img-responsive" src="https://www.torinometeo.org${d.image12}" /></p>`
  html += '<p><b>12:00 - 24:00</b></p>'
  html += `<p><img class="img-responsive" src="https://www.torinometeo.org${d.image24}" /></p>`
  html += `<h3>Temperature</h3>`
  html += d.temperatures
  html += `<h3>Venti</h3>`
  html += d.winds

  return (
    <WebView source={{ html: html }} />
  )
}

DayForecast.propTypes = propTypes
export default DayForecast
