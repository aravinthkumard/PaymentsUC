/**
 * @format
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Alert, Image } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import sideDrawer from "../../constants/SideDrawer";

import Vectors from "../../../assets/images/Vectors001.png";

export default class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 350, height: 350 }} source={Vectors} />
        <Text style={styles.codePushText3}>
          Profile details will be loaded soon...
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
