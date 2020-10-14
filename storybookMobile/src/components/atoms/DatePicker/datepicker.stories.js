import React from 'react';
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import DatePicker from './index';

const buttonStories = storiesOf('DatePicker', module);

buttonStories.addDecorator(withKnobs);

buttonStories.add('Default', () => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
  }}
  >
    <DatePicker form={{ datepicker: null }} field="datepicker" />
  </View>
));

buttonStories.add('Disabled', () => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
  }}
  >
    <DatePicker disabled={boolean('disabled', true)} form={{ datepicker: '' }} field="datepicker" />
  </View>
));
