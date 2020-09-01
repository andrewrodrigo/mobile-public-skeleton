import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Button from './index'

const buttonStories = storiesOf('Botão', module);

buttonStories.addDecorator(withKnobs);

buttonStories.add('Comportamento padrão', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    }}>
        <Button disabled={boolean('disabled', false)} title={text('title', 'Some Title')}/>
    </View>
)