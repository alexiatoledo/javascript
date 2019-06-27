import React, {useState} from 'react';
import { View, Text } from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';


export const Painel = props => {

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);

    const onChangeTextHandler = (nomeCampo, valor) =>{
        if(nomeCampo === 'num1') {
            setNumero1(valor);
        } else if (nomeCampo === 'num2') {
            setNumero2(valor);
        }
    }

    return (
        <View>
            <Entrada num1={numero1} num2={numero2} onChangeTextHandler={onChangeTextHandler} />
            <Comando /> 
            <Operacao />
        </View>
    );
};