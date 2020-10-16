import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Picture from './index';

const pictureStories = storiesOf('Picture', module);

pictureStories.addDecorator(withKnobs);

const form = {
   picture: null
}

//TODO CRIAR OUTROS EXEMPLOS NO STORYBOOK
pictureStories.add('Default', () =>
   <View style={{ flex: 1, justifyContent: 'center'}}>
      <Picture camera={true} form={form} field="picture"/>
   </View>
)

//TODO CRIAR OUTROS EXEMPLOS NO STORYBOOK
pictureStories.add('White', () =>
   <View style={{ flex: 1, justifyContent: 'center'}}>
      <Picture camera={true} form={form} field="picture" white/>
   </View>
)

//TODO CRIAR OUTROS EXEMPLOS NO STORYBOOK
pictureStories.add('Primary', () =>
   <View style={{ flex: 1, justifyContent: 'center'}}>
      <Picture camera={true} form={form} field="picture" primary/>
   </View>
)

//TODO CRIAR OUTROS EXEMPLOS NO STORYBOOK
pictureStories.add('Secondary', () =>
   <View style={{ flex: 1, justifyContent: 'center'}}>
      <Picture camera={true} form={form} field="picture" secondary/>
   </View>
)