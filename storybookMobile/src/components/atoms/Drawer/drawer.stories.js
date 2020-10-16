import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import PageContent from './pageContent';
import PageDrawer from './pageDrawer';
import Drawer from './index';

const drawerStories = storiesOf('Drawer', module);

drawerStories.addDecorator(withKnobs);

drawerStories.add('Default', () =>
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Drawer>
            <PageDrawer drawablePage/>
            <PageContent/>
        </Drawer>
    </View>
)