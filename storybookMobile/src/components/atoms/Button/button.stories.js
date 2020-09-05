import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Button from './index'

const buttonStories = storiesOf('Button', module);

buttonStories.addDecorator(withKnobs);

buttonStories.add('Default', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Button
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            title={text('title', 'Some Title')}
            xs={boolean('xs', false)}
            xl={boolean('xl', false)}
            xxl={boolean('xxl', false)}
            secondary={boolean('secondary', false)}
        />
    </View>
)

buttonStories.add('Button XL', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Button
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            title={text('title', 'Some Title')}
            xs={boolean('xs', false)}
            xl={boolean('xl', true)}
            xxl={boolean('xxl', false)}
            secondary={boolean('secondary', false)}
        />
    </View>
)

buttonStories.add('Button XS', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Button
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            title={text('title', 'Some Title')}
            xs={boolean('xs', true)}
            xl={boolean('xl', false)}
            xxl={boolean('xxl', false)}
            secondary={boolean('secondary', false)}
        />
    </View>
)

buttonStories.add('Button XXL', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Button
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            title={text('title', 'Some Title')}
            xs={boolean('xs', false)}
            xl={boolean('xl', false)}
            xxl={boolean('xxl', true)}
            secondary={boolean('secondary', false)}
        />
    </View>
)

buttonStories.add('Button Bold', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Button
            title={text('title', 'Some Title')}
            fontWeight={text('fontWeight: normal|bold', 'bold')}
        />
    </View>
)

buttonStories.add('Secondary', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Button
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            title={text('title', 'Some Title')}
            xs={boolean('xs', false)}
            xl={boolean('xl', true)}
            xxl={boolean('xxl', false)}
            secondary={boolean('secondary', true)}
        />
    </View>
)