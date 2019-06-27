import React from 'react';
import {TextInput, StyleSheet} from 'react-native';


export default props => (
    <TextInput keyboardType={'numeric'} value={props.num}/>
)

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20,
        bordeWidth: 1,
    }
})