/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import HomePage from './src/components/homepage';

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
