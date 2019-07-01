import React, {useState} from 'react';
import {Picker, StyleSheet} from 'react-native';

export default props => {

    return (
        <Picker selectedValue={selecionado}
        onValueChange={(item) => {props.onValueChangeHandler(item)}}
        >
            <Picker.Item label='Escolha uma opção' value={0} />
            <Picker.Item label='Adição' value={1} />
            <Picker.Item label='Subtrção' value={2}/>
            <Picker.Item label='Multiplicação' value={3}/>
            <Picker.Item label='Divisão' value ={4}/>
        </Picker>
    )
}
