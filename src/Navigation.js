/**
 * @format
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator, TabScene } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import IOSIcon from "react-native-vector-icons/Ionicons";
import ContactsScreen from './screens/ContactsScreen/ContactsScreen';
import PaymentsScreen from './screens/PaymentsScreen/PaymentsScreen';
import CodePushScreen from './screens/CodePushScreen/CodePushScreen';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import OthersScreen from './screens/OthersScreen/OthersScreen';
import NavigationTabBar from './components/NavigationTabBar';
import {
  CONTACTS,
  CODEPUSH,
  STATEMENTS,
  OTHERS
} from "./constants/routes";
import iconHomeActive from "../assets/images/homeActive.png";
import iconHomeDefault from "../assets/images/homeDefault.png";
import statementsActive from "../assets/images/statementsActive.png";
import statementsDefault from "../assets/images/statementsDefault.png"
import moveMoneyActive from "../assets/images/moveMoneyActive.png";
import moveMoneyDefault from "../assets/images/moveMoneyDefault.png";
import helpActive from "../assets/images/helpActive.png";
import helpDefault from "../assets/images/helpDefault.png";
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


const ContactStack = createStackNavigator(
    {
        ContactsNavigation: ContactsScreen
    },
    {
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
        PaymentNavigation: PaymentsScreen
     },
    {
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
        CodePushNavigation: CodePushScreen
    },
    {
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
        OtherNavigation: OthersScreen
    },
    {
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
      navigationOptions:  ({navigation}) => ({
        tabBarIcon: tabIcon(iconHomeDefault,iconHomeActive),
        tabBarLabel: Text.footerContacts,
        headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <IOSIcon name="ios-menu" size={30} />
                  </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 15 }
      })
    },

    PaymentNavigation: {
      screen: PaymentStack,
      navigationOptions:  {
        tabBarIcon: tabIcon(statementsDefault, statementsActive),
        tabBarLabel: Text.footerPayments
      }
    },

     CodePushNavigation: {
      screen: CodePushStack,
      navigationOptions:  {
        tabBarIcon: tabIcon(moveMoneyDefault, moveMoneyActive),
        tabBarLabel: Text.footerCodePush
      }
    },

    OtherNavigation: {
      screen: OthersScreen,
      navigationOptions:  {
        tabBarIcon: tabIcon(helpDefault, helpActive),
        tabBarLabel: Text.footerOthers
      }
    }
  },
  
  {
    tabBarComponent: NavigationTabBar,
    tabBarPosition: "bottom"
  }
  );


const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Navigation: BottomTabNav
});

export default createAppContainer(InitialNavigator);


/* const AppNavigation = createAppContainer(BottomTabNav);

export default class Navigation extends Component {
    render() {
        return <AppNavigation/>;
    }
} */



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