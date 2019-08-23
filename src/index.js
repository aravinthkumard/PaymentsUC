/**
 * @format
 */

import React, { Component } from "react";
import { YellowBox } from "react-native";
import App from "./App";

export default class AppWrapper extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      "Warning: Each child",
      "Warning: componentWillUpdate"
    ]);
  }

  render() {
    return <App />;
  }
}
