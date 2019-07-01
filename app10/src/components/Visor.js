import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
    <View>
        <TextInput style={styles.visor}placeholder='Resultado' value={props.resultado.toString() || '0'} /> 
    </View>
);

conststyles = StyleSheet.create({
    viso: 100,
    fontSize: 30
})