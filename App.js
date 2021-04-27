import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Transaction from './screens/Transaction';
import Search from './screens/Search';

export default class App extends React.Component {
  render(){
  return  <AppContainer/>;
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{ screen:Transaction},
  Search:{ screen:Search},
});
const AppContainer = createAppContainer(TabNavigator);
