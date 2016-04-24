import React, {
  Component,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  PropTypes
} from 'react-native';

import Heading from './Header';
import Badge from './Badge';
import Separator from '../Helpers/Separator';

class Repositories extends Component {
  openPage(url){
    this.props.navigator.push({
      id: "repository_page",
      passProps: {url: url}
    });
  }
  render() {
    var repos = this.props.repos;
    var list = repos.map((item, index) => {
      var desc = "";
      if(repos[index].description) {
        desc = <Text style={styles.description}> {repos[index].description} </Text>
      } else {
        desc = <View />
      }
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repos[index].html_url)}
              underlayColor='transparent' >
              <Text style={styles.name}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}>Stars: {repos[index].stargazers_count}</Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
    });
    return(
      <View style={styles.container}>
        <Heading navigator={this.props.navigator} headingText="Repositories"/>
        <ScrollView>
          <Badge userInfo={this.props.userInfo} />
          {list}
        </ScrollView>
      </View>
    );
  }
}

Repositories.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export default Repositories;
