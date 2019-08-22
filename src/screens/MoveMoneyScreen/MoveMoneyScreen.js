/**
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


export default class MoveMoney extends Component {

    static navigationOptions = {
    title: 'Move Money',
  }

  constructor(props) {
    super(props);
  }
    render() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Move Money</Text>
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