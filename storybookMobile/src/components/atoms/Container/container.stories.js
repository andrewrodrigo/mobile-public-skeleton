import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Container from './index'

const containerStories = storiesOf('Container', module);

containerStories.addDecorator(withKnobs);

containerStories.add('Default', () =>
    <Container/>
)

containerStories.add('Container TopXS', () =>
    <Container topXs/>
)

containerStories.add('Container TopXL', () =>
    <Container topXl/>
)

containerStories.add('Container TopXxL', () =>
    <Container topXxl/>
)

containerStories.add('Container Middle', () =>
    <Container middle/>
)