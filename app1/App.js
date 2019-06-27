/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { contador: 0};
  }

  onPress = (acao) => {
    if(acao == '+')
    {
      this.setState({
        contador: this.state.contador + 1
      })
    } else {
      this.setState({
        contador: this.state.contador === 0 ? 0 : this.state.contador - 1
      })
    }

  }
  render() {
    return (
      <View >
       <TouchableOpacity style={estilo.botao} onPress={()=>{this.onPress('+') }}>
         <Text style={estilo.descricao}>+</Text>
       </TouchableOpacity>
       <Text style={estilo.contador}>
         { this.state.contador !== 0 ? this.state.contador : 0}
       </Text>
       <TouchableOpacity style={estilo.botao} onPress={()=>{this.onPress('-') }}>
         <Text style={estilo.descricao}>-</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  botao: {
    padding: 20,
    backgroundColor: '#DDD',
  },
  descricao: {
    textAlign: 'center',
    fontSize: 30
  },
  contador: {
    color: 'red',
    fontSize: 40,
    textAlign:'center',

  }
})
