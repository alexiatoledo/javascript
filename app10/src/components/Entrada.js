import React from 'react';
import {View, StyleSheet} from 'react-native';
import Numero from './Numero';

export default props => (
    <View style={styles.numeros}>
        <Numero num='10'/>
        <Numero num='10'/>
    </View>
)

const styles = StyleSheet.create({
    numeros:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})