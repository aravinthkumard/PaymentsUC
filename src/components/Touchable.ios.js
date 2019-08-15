// @flow
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import type { TouchableProps } from "./TouchableTypes";
import { TouchableDefaultProps } from "./TouchableTypes";


const createTouchable = BaseTouchable => {
  const Touchable = ({ children, style, ...props }: TouchableProps) => {
    const accessibilityTraits =
      props.accessibilityTraits ||
      (props.disabled ? ["button", "disabled"] : ["button"]);
    return (
      <BaseTouchable
        style={[styles.defaults, style]}
        {...props}
        accessibilityTraits={accessibilityTraits}
      >
        {children}
      </BaseTouchable>
    );
  };

  Touchable.defaultProps = {
    ...TouchableDefaultProps,
    delayPressIn: 50
  };

  return Touchable;
};

const styles = StyleSheet.create({
  defaults: {
    minHeight: 44,
    minWidth: 44,
    justifyContent: "center"
  }
});

const Touchable = createTouchable(TouchableOpacity);

export default Touchable;
