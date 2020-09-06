import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs} from '@storybook/addon-knobs';
import Background from './index'

const backgroundStories = storiesOf('Background', module);

backgroundStories.addDecorator(withKnobs);

backgroundStories.add('Default', () =>
    <Background/>
)