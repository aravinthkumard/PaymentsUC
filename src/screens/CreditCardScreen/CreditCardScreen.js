/**
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


export default class CreditCard extends Component {

    static navigationOptions = {
    title: 'Credit Card',
  }

  constructor(props) {
    super(props);
  }
    render() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Credit Card</Text>
        </View>
    );
    }
 }
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    },
    title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    }
 });