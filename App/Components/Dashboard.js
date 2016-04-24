import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Heading from './Header';
import api from '../Utils/api';

class Dashboard extends Component {
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    switch (btn) {
      case 0:
        obj.backgroundColor = '#48BBEC';
        break;
      case 1:
        obj.backgroundColor = '#E77AAE';
        break;
      default:
        obj.backgroundColor = '#75BBF4';
        break;
    }
    return obj;
  }
  goToProfile(){
    this.props.navigator.push({
      name: this.props.userInfo.name || "Select an option",
      id: "profile",
      passProps: {
        userInfo: this.props.userInfo
      }
    });
  }
  goToRepos(){
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          name: "Repositories",
          id: "repos",
          passProps: {
            userInfo: this.props.userInfo,
            repos: res
          }
        });
      });
  }
  goToNotes(){
    api.getNotes(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          name: "Notes",
          id: "notes",
          passProps: {
            userInfo: this.props.userInfo,
            notes: res
          }
        });
      });
  }
  render(){
    return(
      <View style={styles.container}>
        <Heading navigator={this.props.navigator} headingText={this.props.userInfo.login}/>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight
          onPress={this.goToProfile.bind(this)}
          style={this.makeBackground(0)}>
            <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToRepos.bind(this)}
          style={this.makeBackground(1)}>
            <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToNotes.bind(this)}
          style={this.makeBackground(2)}>
            <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default Dashboard;
