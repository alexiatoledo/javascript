import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class Itens extends Component {
    static propTypes = {
        foto: PropTypes.string,
        titulo: PropTypes.string,
        valor: PropTypes.number,
        local: PropTypes.string,
        data: PropTypes.string
    }

    render(){
        return (
            <View>
                <View>
                    <Image source={{ uri: this.props.foto}} />
                </View>
                <View>
                    <Text>{this.props.titulo}</Text>
                    <Text>R$ {this.props.valor}</Text>
                    <Text>Local: {this.props.local}</Text>
                    <Text>Dt. Publicação: {this.props.data}</Text>

                </View>
            </View>
        )
    };
}