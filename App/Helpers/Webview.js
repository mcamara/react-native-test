import React, {
  View,
  WebView,
  StyleSheet,
  Component,
  PropTypes
} from 'react-native';

import Heading from './../Components/Header';

class Webview extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading navigator={this.props.navigator}/>
        <WebView source={{uri: this.props.url}} />
      </View>
    );
  }
};

Webview.propTypes = {
  url: PropTypes.string.isRequired
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    flexDirection: 'column'
  }
});

export default Webview;
