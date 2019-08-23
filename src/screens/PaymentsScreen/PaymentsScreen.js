import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Avatar } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import AvatarImage from "../../../assets/images/AvatarMale.png";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default class PaymentScreen extends React.Component {
  static navigationOptions = {
    title: "Payments"
  };

  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }

  componentDidMount() {
    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth();
    const aMonth = [monthNames[month]];
    var year = new Date().getFullYear();
    that.setState({
      date: date + " " + aMonth + " " + year
    });
  }

  render() {
    const { navigation } = this.props;
    const givenName = navigation.getParam("givenName", "David Jason");
    const familyName = navigation.getParam("familyName", "347654  08642347");
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.title}>From</Text>
          <Text style={styles.type}>Savings Account</Text>
          <Text style={styles.account}>345238 00856423</Text>
          <Text style={styles.type1}>Available Balance: £564.98</Text>
        </Card>
        <Card>
          <Text style={styles.title}>To</Text>
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View>
              <Text style={styles.type2}>
                {givenName}
              </Text>
              <Text style={styles.account1}>
                {familyName}
              </Text>
              <Text style={styles.title}>Amount</Text>
              <TextInput
                style={{ color: "gray", fontSize: 16, fontWeight: "bold" }}
              >
                £ 00.00
              </TextInput>
              <Text style={styles.title}>When </Text>
              <TextInput style={{ color: "gray", fontSize: 16 }}>
                {this.state.date}
              </TextInput>
              <Text style={styles.title}>Reference</Text>
              <TextInput style={styles.reference} />
            </View>
            <View>
              <Avatar
                size="medium"
                rounded
                source={AvatarImage}
                activeOpacity={0.5}
              />
            </View>
          </View>
        </Card>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("CodePushNavigation");
          }}
        >
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>PROCEED</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  title: {
    fontSize: 14,
    color: "#00402e",
    marginTop: 3,
    marginBottom: 5,
    fontWeight: "bold"
  },
  type: {
    fontSize: 16,
    color: "black",
    marginBottom: 6,
    textTransform: "uppercase"
  },
  type2: {
    fontSize: 16,
    color: "black",
    textTransform: "uppercase"
  },
  type1: {
    fontSize: 16,
    color: "black",
    marginBottom: 6
  },
  account: {
    fontSize: 15,
    color: "gray",
    marginBottom: 6,
    fontWeight: "bold"
  },
  account1: {
    fontSize: 15,
    color: "gray",
    marginTop: 20,
    fontWeight: "bold",
    marginBottom: 8
  },
  buttonWrapper: {
    backgroundColor: "#00402e",
    marginTop: 20,
    height: 25,
    marginLeft: 20,
    marginRight: 20
  },
  buttonText: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 3,
    marginBottom: 3,
    marginHorizontal: 2,
    elevation: 1,
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  reference: {
    color: "gray",
    fontSize: 16,
    textTransform: "uppercase"
  }
});
