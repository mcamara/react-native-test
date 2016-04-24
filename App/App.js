import React, {
  Component,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import Main from './Components/Main';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import Notes from './Components/Notes';
import Repositories from './Components/Repositories';
import NavigationBarRouteMapper from './Components/NavigationBarRouteMapper';
import Webview from './Helpers/Webview';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          ref="navigator"
          initialRoute={{ id: 'home' }}
          renderScene={this.navigatorRenderScene} />
      </View>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'home':
        return (<Main navigator={navigator} />);
      case 'mainUserPage':
        return (<Dashboard navigator={navigator} {...route.passProps} />);
      case 'profile':
        return (<Profile navigator={navigator} {...route.passProps} />);
      case 'repos':
        return (<Repositories navigator={navigator} {...route.passProps} />);
      case 'repository_page':
        return (<Webview navigator={navigator} {...route.passProps} />);
      case 'notes':
        return (<Notes navigator={navigator} {...route.passProps} />);
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
});

export default App;
