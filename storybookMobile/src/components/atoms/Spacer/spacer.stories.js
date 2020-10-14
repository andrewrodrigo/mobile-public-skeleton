import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Spacer from './index'
import Label from '../Label'

const spacerStories = storiesOf('Spacer', module);

spacerStories.addDecorator(withKnobs);

spacerStories.add('Default', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Label value="Some Value" />
        <Spacer />
        <Label value="Another Value" />
    </View>
)

spacerStories.add('Soft', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Label value="Some Value" />
        <Spacer xs/>
        <Label value="Another Value" />
    </View>
)

spacerStories.add('Medium', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Label value="Some Value" />
        <Spacer xl/>
        <Label value="Another Value" />
    </View>
)

spacerStories.add('Large', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Label value="Some Value" />
        <Spacer xxl/>
        <Label value="Another Value" />
    </View>
)