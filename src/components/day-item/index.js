import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './styles';

class DayItem extends Component {
  render() {
    return (
      <Text style={styles.day}>
        {this.props.day}
      </Text>
    );
  }
}

module.exports = DayItem;
