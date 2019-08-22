/**
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import sideDrawer from '../../constants/SideDrawer';


export default class Profile extends Component {

    static navigationOptions = {
    title: 'Profile',
  }

  constructor(props) {
    super(props);
  }

    render() {
      const {sideDrawer} = this.props;
      Alert.alert(sideDrawer);    
    return (
        <View style={styles.container}>
        <FlatList data={sideDrawer} renderItem={({ item }) => (<View><Text style={styles.title}>{`${item.iconName} `} {item.sideBarName}</Text> </View>)}
        keyExtractor={(item, index) => index.toString()} />
        </View>
    );
    }
 }
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    },
    title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    }
 });