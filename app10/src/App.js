import React, { Component } from 'react';
import { View } from 'react-native';
import { Painel, Resultado, Topo } from './components';
//const [resultado, setResultado] = useState(0);

export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      resultado: 0,
    }
  }
  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={resultado}/>
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