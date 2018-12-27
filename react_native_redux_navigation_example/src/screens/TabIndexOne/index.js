/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { dispatch } from '../../redux';
import Button from '../../components/Button';

export default class TabIndexOne extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    console.log('onenavigationnavigation', navigation);
    return {
      title: `${navigation.state.routeName}'s Profile'`,
    };
  };

  onStart = () => {
    this.props.navigation.navigate('tabOneSecond');
  };

  render() {
    console.log(' one navigation', this.props.navigation);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>TabIndexOne</Text>
        <Button type="small" name="Go to next page" onPress={this.onStart} />
        <Button
          type="small"
          name="Increment"
          onPress={() => {
            dispatch('INCREMENT');
          }}
        />
        <Button
          type="small"
          name="Decrement"
          onPress={() => {
            dispatch('DECREMENT');
          }}
        />
        <Button
          type="small"
          name="Decrement"
          onPress={() => {
            this.props.navigation.setParams({
              title: 'One',
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
