/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	TextInput,
  View
} from 'react-native';

var MyObjcClass = require('NativeModules').MyObjcClass;

export default class CustomComponent extends Component {
	constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

	render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      {MyObjcClass.greeting}
      </Text>
      <TextInput style={styles.input} onChangeText={(text) => this.squareMe(text)}/>
			<Text style={styles.result}> square is </Text>
      <Text style={styles.result}>
      {this.state.number}
      </Text>
      </View>
    );
  }

	squareMe(number) {
    if (number == '') {
      return;
    }
    MyObjcClass.squareMe(number, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        this.setState({number: result});
      }
    })
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  input: {
    width: 100,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'center'
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
});

AppRegistry.registerComponent('CustomComponent', () => CustomComponent);
