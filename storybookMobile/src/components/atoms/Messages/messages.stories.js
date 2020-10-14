import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Label from './index'

const labelStories = storiesOf('Label', module);

labelStories.addDecorator(withKnobs);


// TODO CRIAR STORYBOOK
labelStories.add('Default', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Label/>
    </View>
)

labelStories.add('Bold', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Label fontWeight='bold'/>
    </View>
)

labelStories.add('Label XS', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Label xs/>
    </View>
)

labelStories.add('Label XL', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Label xl/>
    </View>
)

labelStories.add('Label XXL', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Label xxl/>
    </View>
)