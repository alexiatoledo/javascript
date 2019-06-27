

import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Lista from './components/Lista'



export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  render() {
    return (
      <ScrollView>
        <Text>Ciclo de vida!</Text>
        <Lista />
      </ScrollView>
    );
  }
}