import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import DayItem from '../day-item';
import styles from './styles';

class HomePage extends Component {
  constructor() {
    super();
    this.days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'AwesomeApp ' + nextIndex,
    });
  }

  listDays() {
    return this.days.map(function(day) {
      return <DayItem day={day} />
    });
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
}

module.exports = HomePage;
