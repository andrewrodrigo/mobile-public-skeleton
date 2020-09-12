import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Select from './index'

const selectStories = storiesOf('Select', module);

selectStories.addDecorator(withKnobs);

const itens = [
    { label: 'Item 1', value: 'item1' , selected: true, disabled: true},
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' }
]


selectStories.add('Default', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Select itens={itens}/>
    </View>
)

//TODO Luka
// Fica como aprendizado do story book, incrementa as opções do componente como os outros inputs, botoes etc.