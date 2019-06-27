import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import Itens from './Itens';

const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state =  { listaItens: []}
    }

    async componentDidMount() {
        const itens = await axios.get(url);
        this.setState({ listaItens: itens.data });
        console.log(itens.data);
    }

    render() {
        return (
           <View>
               { this.state.listaItens.map( item => (
                   <Itens 
                   key={item.titulo}
                   titulo={item.titulo}
                   foto={item.foto}
                   />
               ))}
           </View>
        )
    };

}