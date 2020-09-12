import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Divider from './index'

const dividerStories = storiesOf('Divider', module);

dividerStories.addDecorator(withKnobs);

dividerStories.add('Default', () =>
   <View style={{ flex: 1, justifyContent: 'center'}}>
      <Divider text="Some Text"/>
   </View>
)

dividerStories.add('Line Change', () =>
   <View style={{ flex: 1, justifyContent: 'center'}}>
      <Divider text="Some Text" withLine={boolean('withLine', false)}/>
   </View>
)

dividerStories.add('Text Change', () =>
   <View style={{ flex: 1, justifyContent: 'center'}}>
      <Divider text={text('text', 'Some Title')} withLine={boolean('withLine', false)}/>
   </View>
)