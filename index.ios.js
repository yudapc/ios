/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor() {
    super();
    this.days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hari-hari yang akan dilalui!
        </Text>
        {this.listDays()}
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }

  listDays() {
    return this.days.map(function(day) {
      return <DayItem day={day} />
    });
  }
}

class DayItem extends Component {
  render() {
    return (
      <Text style={styles.day}>
        {this.props.day}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
