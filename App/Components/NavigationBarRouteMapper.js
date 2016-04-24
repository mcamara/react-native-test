import React, {
  Text
} from 'react-native';

const NavigationBarRouteMapper = {
  LeftButton: function( route, navigator, index, navState ){
    return(
      <Text>{ route.leftButton }</Text>
    )
  },
  Title: function( route, navigator, index, navState ){
    return(
      <Text>{ route.title }</Text>
    )
  },
  RightButton: function( route, navigator, index, navState ){
    return(
      <Text>{ route.rightButton }</Text>
    )
  }
}

export default NavigationBarRouteMapper;
