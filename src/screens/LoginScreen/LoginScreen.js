/**
 * @format
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  StatusBar,
  ActivityIndicator
} from "react-native";

import LloydsHorse from "../../../assets/images/LloydsHorse.png";
import LoginIcon from "../../../assets/images/LoginIcon.png";
import KeyIcon from "../../../assets/images/KeyIcon.png";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#FFFFFF"
          translucent={false}
          networkActivityIndicatorVisible={true}
        />
        <View style={styles.hoursePlan}>
          <Image style={styles.hourse} source={LloydsHorse} />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={LoginIcon} />
          <TextInput
            style={styles.inputs}
            placeholder="User Name"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={KeyIcon} />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <View>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.props.navigation.navigate("Navigation")}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener("Restore Password")}
        >
          <Text style={styles.text}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener("Register")}
        >
          <Text style={styles.text}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  inputContainer: {
    borderBottomColor: "#00402e",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#00402e"
  },
  loginText: {
    color: "white"
  },
  hoursePlan: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  hourse: {
    width: 172,
    height: 236
  },
  text: {
    color: "#404040"
  }
});
