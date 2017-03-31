/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';
import HomePage from './src/components/homepage/homepage';

export default class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HomePage,
          title: 'Hari-hari ku',
        }}
        style={{flex: 1}}
      />
    );
  }

}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
