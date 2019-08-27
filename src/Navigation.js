/**
 * @format
 */

import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  TabScene,
  SafeAreaView,
  Text,
  Dimensions
} from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import IOSIcon from "react-native-vector-icons/Ionicons";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/Home";
import AccountSummary from "./screens/HomeScreen/AccountSummary";
import CardSummary from "./screens/HomeScreen/CardSummary";
import LoanSummary from "./screens/HomeScreen/LoanSummary";
import ContactsScreen from "./screens/ContactsScreen/ContactsScreen";
import PaymentsScreen from "./screens/PaymentsScreen/PaymentsScreen";
import CodePushScreen from "./screens/CodePushScreen/CodePushScreen";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import OthersScreen from "./screens/OthersScreen/OthersScreen";
import MoveMoneyScreen from "./screens/MoveMoneyScreen/MoveMoneyScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import DirectDebitScreen from "./screens/DirectDebitScreen/DirectDebitScreen";
import StatementsScreen from "./screens/StatementsScreen/StatementsScreen";
import CreditCardScreen from "./screens/CreditCardScreen/CreditCardScreen";
import LoansScreen from "./screens/LoansScreen/LoansScreen";
import OverdraftsScreen from "./screens/OverdraftsScreen/OverdraftsScreen";
import DocumentsScreen from "./screens/DocumentsScreen/DocumentsScreen";
import SupportScreen from "./screens/SupportScreen/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";
import NavigationTabBar from "./components/NavigationTabBar";
import HamburgerIcon from "./components/HamburgerIcon";
import SideMenu from "./components/SideMenu";
import { CONTACTS, CODEPUSH, STATEMENTS, OTHERS } from "./constants/routes";
import type { ImageRef } from "./data/image-ref";
import BottomText from "./constants/Text";
import {
  lightTealColor,
  darkBlueGreyColor,
  transparent,
  tabBarShadowColor
} from "./constants/colors";
import iconHomeActive from "../assets/images/homeActive.png";
import iconHomeDefault from "../assets/images/homeDefault.png";
import contactsActive from "../assets/images/contactsActive.png";
import contactsDefault from "../assets/images/contactsDefault.png";
import statementsActive from "../assets/images/statementsActive.png";
import statementsDefault from "../assets/images/statementsDefault.png";
import moveMoneyActive from "../assets/images/moveMoneyActive.png";
import moveMoneyDefault from "../assets/images/moveMoneyDefault.png";
import helpActive from "../assets/images/helpActive.png";
import helpDefault from "../assets/images/helpDefault.png";

const tabIcon = (defaultIcon: ImageRef, activeIcon: ImageRef) => ({
  focused
}: TabScene) =>
  <Image source={focused ? activeIcon : defaultIcon} width={28} height={28} />;

const LoginStack = createStackNavigator(
  {
    LoginNavigation: LoginScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const HomeStack = createStackNavigator(
  {
    HomeNavigation: HomeScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00402e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: <HamburgerIcon />
    }
  }
);

const AccountStack = createStackNavigator(
  {
    AccountNavigation: AccountSummary
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00402e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const CardStack = createStackNavigator(
  {
    CardNavigation: CardSummary
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00402e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const LoanStack = createStackNavigator(
  {
    LoanNavigation: LoanSummary
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00402e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const ContactStack = createStackNavigator(
  {
    ContactsNavigation: ContactsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00402e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: <HamburgerIcon />
    }
  }
);

const PaymentStack = createStackNavigator(
  {
    PaymentNavigation: PaymentsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00402e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: <HamburgerIcon />
    }
  }
);

const CodePushStack = createStackNavigator(
  {
    CodePushNavigation: CodePushScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00402e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: <HamburgerIcon />
    }
  }
);

const OtherStack = createStackNavigator(
  {
    OtherNavigation: OthersScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00402e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: <HamburgerIcon />
    }
  }
);

const BottomTabNav = createBottomTabNavigator(
  {
    HomeNavigation: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: tabIcon(iconHomeDefault, iconHomeActive),
        tabBarLabel: BottomText.footerHome
      }
    },

    ContactsNavigation: {
      screen: ContactStack,
      navigationOptions: {
        tabBarIcon: tabIcon(contactsDefault, contactsActive),
        tabBarLabel: BottomText.footerContacts
      }
    },

    PaymentNavigation: {
      screen: PaymentStack,
      navigationOptions: {
        tabBarIcon: tabIcon(statementsDefault, statementsActive),
        tabBarLabel: BottomText.footerPayments
      }
    },

    CodePushNavigation: {
      screen: CodePushStack,
      navigationOptions: {
        tabBarIcon: tabIcon(moveMoneyDefault, moveMoneyActive),
        tabBarLabel: BottomText.footerCodePush
      }
    },

    OtherNavigation: {
      screen: OtherStack,
      navigationOptions: {
        tabBarIcon: tabIcon(helpDefault, helpActive),
        tabBarLabel: BottomText.footerOthers
      }
    }
  },
  {
    tabBarComponent: NavigationTabBar,
    tabBarPosition: "bottom"
  }
);

const HamburgerNavigation = createDrawerNavigator(
  {
    Tabs: BottomTabNav
  },
  {
    initialRouteName: "Tabs",
    contentComponent: SideMenu
  }
);

const HamburgerStack = createStackNavigator(
  {
    Drawer: {
      screen: HamburgerNavigation,
      navigationOptions: {
        header: null
      }
    },

    LoginNavigation: {
      screen: LoginStack
    },
    AccountSummary: {
      screen: AccountSummary
    },
    CardSummary: {
      screen: CardSummary
    },
    LoanSummary: {
      screen: LoanSummary
    },
    MoveMoneyScreen: {
      screen: MoveMoneyScreen
    },
    ProfileScreen: {
      screen: ProfileScreen
    },
    DirectDebitScreen: {
      screen: DirectDebitScreen
    },
    StatementsScreen: {
      screen: StatementsScreen
    },
    CreditCardScreen: {
      screen: CreditCardScreen
    },
    LoansScreen: {
      screen: LoansScreen
    },
    OverdraftsScreen: {
      screen: OverdraftsScreen
    },
    DocumentsScreen: {
      screen: DocumentsScreen
    },
    SupportScreen: {
      screen: SupportScreen
    },
    SettingsScreen: {
      screen: SettingsScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00402e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Login: LoginStack,
  Navigation: HamburgerStack
});

export default createAppContainer(InitialNavigator);

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
