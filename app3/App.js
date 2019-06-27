import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Título</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC'
  },
  header: {
    height: 60,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
