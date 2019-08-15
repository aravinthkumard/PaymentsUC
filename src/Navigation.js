/**
 * @format
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createAppContainer, TabScene } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import ContactsScreen from './screens/ContactsScreen/ContactsScreen';
import PaymentsScreen from './screens/PaymentsScreen/PaymentsScreen';
import CodePushScreen from './screens/CodePushScreen/CodePushScreen';
import NavigationTabBar from './components/NavigationTabBar';
import {
  CONTACTS,
  CODEPUSH,
  STATEMENTS,
  OTHERS
} from "./constants/routes";
import iconHomeActive from "../assets/images/homeActive.png";
import iconHomeDefault from "../assets/images/homeDefault.png";
import type { ImageRef } from "./data/image-ref";
import Text from "./constants/Text";
import {
  lightTealColor,
  darkBlueGreyColor,
  transparent,
  tabBarShadowColor
} from "./constants/colors";

const tabIcon = (defaultIcon: ImageRef, activeIcon: ImageRef) => ({
  focused
}: TabScene) => (
  <Image source={focused ? activeIcon : defaultIcon} width={28} height={28} />
);

const withShadow = Component => props => (
     <View style={styles.shadowContainer}>
       <Component {...props} />
       <LinearGradient
         colors={[transparent, tabBarShadowColor]}
         style={styles.shadow}
         pointerEvents="none"
       />
     </View>
 );

 export const getTabTestId = (routeName: string) => {
  switch (routeName) {
    case CONTACTS:
      return "contacts-tab-button";
    case STATEMENTS:
      return "statements-tab-button";
    case CODEPUSH:
      return "codepush-tab-button";
    case OTHERS:
      return "others-groups-button";
    default:
      return "";
  }
};

const ContactStack = createStackNavigator(
    {
        ContactsNavigation: ContactsScreen
    },
    {
        initialRouteName: 'ContactsNavigation',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00402e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            },
        },
    }
);

const PaymentStack = createStackNavigator(
    {
        PaymentNavigation: withShadow(PaymentsScreen)
     },
    {
        initialRouteName: 'PaymentNavigation',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00402e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        },
    }
);

const CodePushStack = createStackNavigator(
    {
        CodePushNavigation: withShadow(CodePushScreen)
    },
    {
        initialRouteName: 'CodePushNavigation',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00402e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        },
    }
);

const OtherStack = createStackNavigator(
    {
        OtherNavigation: withShadow(CodePushScreen)
    },
    {
        initialRouteName: 'CodePushNavigation',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00402e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        },
    }
);

const BottomTabNav = createBottomTabNavigator(
  {
  ContactsNavigation: {
      screen: ContactStack,
      navigationOptions:  {
        tabBarIcon: tabIcon(iconHomeDefault,iconHomeActive),
        tabBarLabel: Text.footerContacts
      }
    },

    PaymentNavigation: {
      screen: PaymentStack,
      navigationOptions:  {
        tabBarIcon: tabIcon(iconHomeDefault, iconHomeActive),
        tabBarLabel: Text.footerPayments
      }
    },

     CodePushNavigation: {
      screen: CodePushStack,
      navigationOptions:  {
        tabBarIcon: tabIcon(iconHomeDefault, iconHomeActive),
        tabBarLabel: Text.footerCodePush
      }
    },

    OtherNavigation: {
      screen: CodePushStack,
      navigationOptions:  {
        tabBarIcon: tabIcon(iconHomeDefault, iconHomeActive),
        tabBarLabel: Text.footerOthers
      }
    }
  },

  {
    tabBarComponent: NavigationTabBar,
    tabBarPosition: "bottom",
    cardStyle: {
      backgroundColor: "blue"
    }
  }
  );



const AppNavigation = createAppContainer(BottomTabNav);

export default class Navigation extends Component {
    render() {
        return <AppNavigation/>;
    }
}

const styles = StyleSheet.create({
  shadowContainer: {
    flex: 1
  },
  shadow: {
    width: "100%",
    height: 7,
    position: "absolute",
    left: 0,
    bottom: 0
  },
  card: {
    shadowOpacity: 0
  }
});