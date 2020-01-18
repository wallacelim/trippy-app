import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  View,
} from 'react-native';
//import {Actions, ActionConst} from 'react-native-router-flux';

import spinner from '../images/loading_transparent.gif';

// const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class Button_Submit extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);

    setTimeout(() => {
      //Actions.secondScreen();
      this.setState({isLoading: false});
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  //1242 is iphone 11 pro max device width
  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1242 - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    return (
      <View style={styles.container}>
        <Animated.View style={{width: changeWidth}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <Text style={styles.text}>Log in</Text>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -100,
    alignItems: 'center',
    justifyContent: 'flex-start', //top of the white box
    zIndex: 99
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#2C7A7B',
    borderColor: '#2C7A7B',
    borderWidth: 0,
    borderRadius: 20,
    height: 50,
    width: 310,
    zIndex: 100,
  },
  circle: { //expanding circle
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 0.1,
    borderColor: '#81E6D9',
    borderRadius: 20,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#2C7A7B',
  },
  text: {
    alignSelf: 'center',
    marginTop: 15,
    height: 20,
    fontSize: 16,
    color: 'white',
    fontWeight: "bold",
    zIndex: 101,
    //backgroundColor: 'transparent',
  },
  image: {
    alignSelf: 'center',
    width: 60,
    height: 50,
  },
});
