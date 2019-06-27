import React, {useState} from 'react';
import {Picker, StyleSheet} from 'react-native';

export default props => {
    const [selecionado, setSelecionado] = useState(0);

    function selectedHandle(item) {
        setSelecionado(item);
    }
    return (
        <Picker selectedValue={selecionado}
        onValueChange={(item) => {selectedHandle(item)}}
        >
            <Picker.Item label='Escolha uma opção' value={0} />
            <Picker.Item label='Adição' value={1} />
            <Picker.Item label='Subtrção' value={2}/>
        </Picker>
    )
}