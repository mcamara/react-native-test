import React, {
  View,
  Image,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';

class Header extends Component {
  goBack() {
    this.props.navigator.pop();
  }
  getHeadingText() {
    var text = this.props.headingText ? this.props.headingText : 'Github';
    return(
      <Text style={styles.toolbarTitle}>{text}</Text>
    );
  }
  render() {
    return (
      <View>
        <View style={styles.toolbar}>
          <TouchableHighlight
            onPress={this.goBack.bind(this)}
            underlayColor='transparent'
          >
            <Text style={styles.toolbarButton}>Back</Text>
          </TouchableHighlight>
          {this.getHeadingText()}
          <Text style={styles.toolbarButton}>Like</Text>
        </View>
      </View>
    );
  }
}

Header.displayName = 'Header';

var styles = StyleSheet.create({
    toolbar:{
      backgroundColor:'#81c04d',
      paddingTop:30,
      paddingBottom:10,
      flexDirection:'row'
    },
    toolbarButton:{
      width: 50,
      color:'#fff',
      textAlign:'center'
    },
    toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      flex:1
    }
});

export default Header;
