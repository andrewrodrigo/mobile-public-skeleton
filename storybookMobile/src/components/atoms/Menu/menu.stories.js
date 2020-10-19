import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Menu from './index'

const nextStories = storiesOf('Next', module);

nextStories.addDecorator(withKnobs);

// TODO Luka Cria aqui os stories com as possibilidades de props
nextStories.add('Default', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Menu/>
    </View>
)