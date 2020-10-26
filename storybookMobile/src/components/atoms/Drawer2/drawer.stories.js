import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Drawer from './index';

const drawerStories = storiesOf('Drawer2', module);

drawerStories.addDecorator(withKnobs);

drawerStories.add('Default', () =>
    // <View style={{ flex: 1, justifyContent: 'center' }}>
        <Drawer>
        </Drawer>
    // </View>
)