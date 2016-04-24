import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Heading from './Header';
import Badge from './Badge';
import Separator from '../Helpers/Separator';

class Profile extends Component {
  getRowTitle(user, item) {
    item = item.replace('_', '');
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render() {
    var userInfo = this.props.userInfo;
    const topicArr = [
      'company',
      'location',
      'followers',
      'following',
      'email',
      'bio',
      'public_repos'
    ];
    var list  = topicArr.map((item, index) => {
      if(!userInfo[item]){
        return <View key={index} />
      }
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text style={styles.rowTitle}> {this.getRowTitle(userInfo, item)} </Text>
            <Text style={styles.rowContent}> {userInfo[item]} </Text>
          </View>
          <Separator />
        </View>
      );
    });
    return(
      <View style={styles.container}>
        <Heading navigator={this.props.navigator} headingText={this.props.userInfo.login}/>
        <ScrollView>
          <Badge userInfo={userInfo} />
          {list}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

export default Profile;
