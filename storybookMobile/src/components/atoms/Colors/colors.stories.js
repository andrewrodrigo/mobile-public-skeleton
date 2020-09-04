import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { Dimensions } from 'react-native'
import { Text } from 'native-base'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { primary, secondary } from './index'

const buttonStories = storiesOf('Colors', module);

buttonStories.addDecorator(withKnobs);
const deviceWidth = Dimensions.get('window').width;

buttonStories.add('Primary', () =>
    <View style={{
        width: deviceWidth,
        backgroundColor: '#F0F0F0',
        height: 20,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    }}>
        <Text style={{ backgroundColor: primary.default}}>Default</Text>
        <Text style={{ backgroundColor: primary.ok}}>Ok</Text>
        <Text style={{ backgroundColor: primary.error}}>Error</Text>
        <Text style={{ backgroundColor: primary.disabled}}>Disabled</Text>
        <Text style={{ backgroundColor: primary.loading}}>Loading</Text>
    </View>

)

buttonStories.add('Secondary', () =>
    <View style={{
        width: deviceWidth,
        backgroundColor: '#F0F0F0',
        height: 20,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    }}>
        <Text style={{ backgroundColor: secondary.default}}>Default</Text>
        <Text style={{ backgroundColor: secondary.ok}}>Ok</Text>
        <Text style={{ backgroundColor: secondary.error}}>Error</Text>
        <Text style={{ backgroundColor: secondary.disabled}}>Disabled</Text>
        <Text style={{ backgroundColor: secondary.loading}}>Loading</Text>
    </View>

)