import React, { PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../Themes/ApplicationStyles'
import { Colors } from '../Themes/'

const propTypes = {
  navigation: PropTypes.object.isRequired
}

const DrawerIcon = (props) => {
  return (
    <TouchableOpacity>
      <Icon
        name='bars'
        color={Colors.snow}
        style={ApplicationStyles.drawer.icon}
        onPress={() => props.navigation.navigate('DrawerOpen')}
        size={35} />
    </TouchableOpacity>
  )
}

DrawerIcon.propTypes = propTypes
export default DrawerIcon
