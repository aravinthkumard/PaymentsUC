/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
//import codePush from "react-native-code-push";

import Wow from "../../../assets/images/Wow.png";

export default class OthersScreen extends Component {
  static navigationOptions = {
    title: "Others"
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 175, height: 168 }} source={Wow} />
        <Text style={styles.codePushText3}>
          Other details will be loaded...
        </Text>
      </View>
    );
  }
}

{
  /*CodePushDemo = codePush({ installMode: codePush.InstallMode.IMMEDIATE })(CodePushDemo);*/
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
