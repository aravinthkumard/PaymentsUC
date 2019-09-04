/**
 * @format
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import Vectors from "../../../assets/images/Vectors005.png";

export default class CreditCard extends Component {
  static navigationOptions = {
    title: "Credit Card"
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 350, height: 350 }} source={Vectors} />
        <Text style={styles.codePushText3}>
          Credit Card details will be loaded soon...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ivory"
  },
  welcome: {
    fontSize: 22,
    textAlign: "center",
    margin: 10,
    color: "darkblue",
    fontWeight: "bold"
  },
  codePushText1: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold"
  },
  codePushText2: {
    fontSize: 20,
    color: "blue"
  },
  codePushText3: {
    fontSize: 15,
    color: "navy",
    fontWeight: "bold"
  }
});
