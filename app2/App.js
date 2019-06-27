
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
        // eslint-disable-next-line react/jsx-filename-extension
            <View style={estilo.container}>
                <View style={estilo.box} />
                <View style={estilo.box} />
                <View style={estilo.box} />
                <View style={estilo.box} />
            </View>
        );
    }
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#CCC',
        flexWrap: 'wrap',
        alignContent: 'space-between',
    },
    box: {
        flex: 1,
        height: 100,
        minWidth: 100,
        width: 100,
        backgroundColor: '#666',
        borderColor: '#999',
        borderWidth: 5,
        margin: 10,
    },
    // eslint-disable-next-line no-dupe-keys
    box1: {
        alignSelf: 'flex-end',
    },
});
