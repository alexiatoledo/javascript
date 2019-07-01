import React from 'react';
import {Buton} from 'react-native';

export default props => (
    <Buton title='Calcular' onPress={() => {props.calcular()}}/>
)
