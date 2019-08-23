/**
 * @format
 */
 

import React from 'react';
import { View, Text, Image,StatusBar, Platform} from 'react-native';
import LloydsHorse from '../../../assets/images/LloydsHorse.png';


class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2500
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar 
        barStyle = "dark-content" 
        hidden = {false}
        backgroundColor = "#FFFFFF"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
        />
        <View style={styles.hoursePlan}>
            <Image style={styles.hourse} source={LloydsHorse}/>
        </View>
        <Text style={styles.text} > Lloyds Bank
        </Text>
        <Text style={styles.moto} > By your side
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  hoursePlan: {
    width: 172, 
    height: 236,
    marginBottom: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  hourse: {
    width: 172,
    height: 236
  },
  text: {
    position: "absolute",
    bottom: 100,
    color: '#00402e',
    fontSize: 32,
    fontWeight: 'bold'
  },
  moto: {
    position: "absolute",
    bottom: 80,
    color: '#5A5D5C',
    fontSize: 15,
    fontWeight: 'bold'
  }
}

export default SplashScreen;