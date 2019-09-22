import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import Home from './app/views/Home'
import Trending from './app/views/Trending'
import Places from './app/views/Places'
import Register from './app/views/Register'
import Login from './app/views/Login'

const CustomDrawerContentComponent = props => (
  <SafeAreaView style={{ backgroundColor: '#2B3046', shadowOpacity: 0.8, shadowRadius: 3, flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.avatar_container}>
        <Image
          style={styles.avatar}
          source={require('./app/assets/images/thumbs/avatar.png')}
        />
        <View><Text style={styles.profile_name}>Twanda Keaton</Text></View>
      </View>

      <View style={styles.list_container} >
        <DrawerNavigatorItems {...props} itemStyle={{ fontSize: 1 }} />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  avatar_container: {
    borderRadius: 10,
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 80,
    width: 200,
    height: 200,
    resizeMode: 'stretch'
  },
  profile_name: {
    color: '#7897E0',
    fontSize: 25,
    marginTop: 20,
    fontWeight: '200'
  },
  list_container: {
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  list_item_container: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  list_item: {
    color: "white",
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: '100'
  }
});

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Register: {
      screen: Register,
    },
    Login: {
      screen: Login,
    },
    Trending: {
      screen: Trending,
    },
    Places: {
      screen: Places,
    },
  },
  {
    initialRouteName: 'Login',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      itemsContainerStyle: styles.list_item_container,
      activeTintColor: '#e91e63',
      labelStyle: styles.list_item
    }
  });

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
};



export default App;
