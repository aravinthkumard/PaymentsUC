/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import BodyComponent from "./Body";
import { Container } from "native-base";
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions
} from "react-navigation";

class Home extends Component {
  static navigationOptions = {
    title: "Accounts"
  };

  render() {
    return (
      <Container>
        <BodyComponent {...this.props} />
      </Container>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
