import PropTypes from 'prop-types';
import React, {Component,Fragment} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity, StyleSheet,SafeAreaView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import { Avatar, Icon } from 'react-native-elements';




class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  }

  render () {
    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#00402e' }} />
        <View style={{height: 100, backgroundColor: '#00402e', flexDirection: 'row'}} >
        <View style={{padding:20}}>
        <Avatar
          size="medium"
          rounded
          source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
          activeOpacity={0.7}
          />
        </View>
        <View style={{padding:5, marginTop: 14}}>
        <Text style={styles.customerName}>Mark Williams</Text>
        <Text style={styles.customerID}>Cus.ID:87427642980</Text>
        </View>
        </View>
        <ScrollView>
        <TouchableOpacity style={styles.iconWrapper}>
         <Icon name='user-circle' type='font-awesome' size={22} color='#00402e'/>
        <Text style={styles.menuText}>Profile</Text></TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.iconWrapper}>
         <Icon name='send' type='font-awesome' size={22} color='#00402e'/>
        <Text style={styles.menuText}>Move Money</Text></TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.iconWrapper}>
        <Icon name='arrow-circle-right' type='font-awesome' size={22} color='#00402e'/>
        <Text style={styles.menuText}>Direct Debit</Text></TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.iconWrapper}>
         <Icon name='folder-open' type='font-awesome' size={22} color='#00402e'/>
        <Text style={styles.menuText}>Statements</Text></TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.iconWrapper}>
         <Icon name='credit-card' type='font-awesome' size={22} color='#00402e'/>
        <Text style={styles.menuText}>Credit Card</Text></TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.iconWrapper}>
        <Icon name='money' type='font-awesome' size={22} color='#00402e'/>
        <Text style={styles.menuText}>Loans</Text></TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.iconWrapper}>
         <Icon name='chevron-circle-left' type='font-awesome' size={22} color='#00402e'/>
        <Text style={styles.menuText}>Overdrafts</Text></TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.iconWrapper}>
         <Icon name='folder' type='font-awesome' size={22} color='#00402e'/>
        <Text style={styles.menuText}>Documents</Text></TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.iconWrapper}>
         <Icon name='info' type='font-awesome' size={22} color='#00402e'/>
        <Text style={styles.menuText}>Support</Text></TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.iconWrapper}>
         <Icon name='cogs' type='font-awesome' size={22} color='#00402e'/>
        <Text style={styles.menuText}>Settings</Text></TouchableOpacity>
        </ScrollView>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#00402e' }}> 
        <TouchableOpacity style={styles.footerContainer}>
         <View style={styles.footerWrapper}>
         <Icon name='power-off' type='font-awesome' size={25} color='red'/>
        <Text style={styles.footerText}>Log Off</Text>
        </View>
        </TouchableOpacity>
        </SafeAreaView>
      </Fragment>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;

const styles = StyleSheet.create({
 container: {
    paddingTop: 20,
    flex: 0
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    flex:0,
    backgroundColor: '#00402e',
    height: 40,
  },
  iconWrapper: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginLeft: 15,
  },
  footerWrapper: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginLeft: 15,
    marginTop: 10,
  }, 
   customerName: {
    color: 'white', 
    fontSize: 15, 
    fontWeight: 'bold'
  },
  customerID: {
    color: 'white', 
    fontSize: 12, 
    fontWeight: 'bold'
  },
  footerText: {
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold',
    alignItems: 'center',
    marginLeft: 12,
  },
  footerLogo: {
    marginTop: 5,
  },
  menuText: {
    padding: 10,
    color: '#00402e',
    fontSize: 15,
    fontWeight: 'bold'
  },
  line: {
    borderBottomColor: '#D6E0DD',
    borderBottomWidth: 1,
    margin:10
  },
});