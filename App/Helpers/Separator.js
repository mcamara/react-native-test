import React, {
  StyleSheet,
  View,
  Component
} from 'react-native';

class Separator extends Component {
  render(){
    return (
      <View style={styles.separator} />
    );
  }
}

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1
  }
});

export default Separator;
