import React, { Component } from 'react';
import { View } from 'react-native';
import { Painel, Resultado, Topo } from './components';

export default class App extends Component {
  render() {
    return (
      <View>
        <Topo />
        <Resultado />
        <Painel />
      </View>
    );
  }
}


export default Cabecalho = props => (
  <View styles={styles.topo}>
    <Text style={styles.txtTitulo}> Calculadora 1.0</Text>
  </View>
)