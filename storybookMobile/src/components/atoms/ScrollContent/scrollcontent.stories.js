import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import ScrollContent from './index'
import Label from '../Label'

const scrollContent = storiesOf('ScrollContent', module);

scrollContent.addDecorator(withKnobs);

scrollContent.add('Default', () =>
    <ScrollContent>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
        <Label value="SomeValue"/>
    </ScrollContent>
)