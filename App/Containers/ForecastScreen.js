import React, { PropTypes } from 'react'
import { View, WebView } from 'react-native'
import moment from 'moment'
import { BottomNavigation } from 'react-native-material-ui'
import { connect } from 'react-redux'
import DayForecast from '../Components/DayForecast'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/ForecastScreenStyle'

const propTypes = {
  forecast: PropTypes.object
}

class ForecastScreen extends React.Component {
  constructor () {
    super()

    this.state = {
      active: 'pattern'
    }
  }

  title () {
    switch (this.state.active) {
      case 'pattern':
        return 'Situazione generale'
      case 'today':
        return 'Oggi'
      case 'tomorrow':
        return 'Domani'
      default:
        return 'Previsioni'
    }
  }

  content () {
    let forecast
    switch (this.state.active) {
      case 'pattern':
        let html = `<style>.img-responsive { max-width: 100%; } h2 { margin-top: 20px; }</style>`
        html += `<h2>${this.title()}</h2>`
        html += `${this.props.forecast.pattern}`
        return <WebView source={{ html: html }} />
      case 'today':
        forecast = this.props.forecast.day_forecasts.filter((d) => {
          let now = moment().startOf('day')
          let date = moment(d.date)
          return now.format('X') === date.format('X')
        })[0]
        return <DayForecast forecast={forecast} />
      case 'tomorrow':
        forecast = this.props.forecast.day_forecasts.filter((d) => {
          let now = moment().startOf('day')
          let date = moment(d.date)
          return moment.duration(date.diff(now)).asDays() === 1
        })[0]
        return <DayForecast forecast={forecast} />
      default:
        let diff = parseInt(this.state.active.replace('day', ''), 10)
        forecast = this.props.forecast.day_forecasts.filter((d) => {
          let now = moment().startOf('day')
          let date = moment(d.date)
          return moment.duration(date.diff(now)).asDays() === diff
        })[0]
        return <DayForecast forecast={forecast} />
    }
  }

  bottomNavigation () {
    if (!this.props.forecast || !this.props.forecast.pattern) {
      return null
    }

    let now = moment().startOf('day')
    return (
      <BottomNavigation active={this.state.active} hidden={false}>
        <BottomNavigation.Action
          key='pattern'
          icon='book'
          label='situazione'
          style={{ container: { minWidth: null } }}
          onPress={() => this.setState({ active: 'pattern' })}
        />
        {this.props.forecast.day_forecasts.filter((d) => {
          let date = moment(d.date)
          return now <= date
        }).map((d) => {
          let date = moment(d.date)
          let diff = moment.duration(date.diff(now)).asDays()
          if (diff === 0) {
            return (
              <BottomNavigation.Action
                key='today'
                icon='today'
                label='oggi'
                style={{ container: { minWidth: null } }}
                onPress={() => this.setState({ active: 'today' })}
              />
            )
          } else if (diff === 1) {
            return (
              <BottomNavigation.Action
                key='tomorrow'
                icon='today'
                label='domani'
                style={{ container: { minWidth: null } }}
                onPress={() => this.setState({ active: 'tomorrow' })}
              />
            )
          } else {
            return (
              <BottomNavigation.Action
                key={'day' + diff}
                icon='today'
                label={date.format('dddd')}
                style={{ container: { minWidth: null } }}
                onPress={() => this.setState({ active: 'day' + diff })}
              />
            )
          }
        })}
      </BottomNavigation>
    )
  }
  render () {
    return (
      <View style={{ flex: 1 }}>
        {this.content()}
        {this.bottomNavigation()}
      </View>
    )
  }
}

ForecastScreen.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    forecast: state.forecast.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastScreen)
