
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Login from './app/components/Login';

export default class positivity extends Component {
  render() {
    return (
     //nav router
     <Navigator initialRoute = {{id: 'Login'}}
     renderScene = {this.navigatorRenderScene } />
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Login':
        return ( <Login navigator = {navigator} /> );
    }
  }
}



AppRegistry.registerComponent('positivity', () => positivity);
