import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Svg from './index'

const labelStories = storiesOf('Svg', module);

labelStories.addDecorator(withKnobs);

labelStories.add('Triangles', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Svg spriteId="triangles"/>
    </View>
)