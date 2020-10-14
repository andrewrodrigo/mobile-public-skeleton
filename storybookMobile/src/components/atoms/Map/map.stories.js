import React from 'react';
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Map from './index';

import marketIcon from '../../../../assets/icon.png';

const stories = storiesOf('Map', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Map />
));

stories.add('Initial Region', () => (
  <Map initialRegion={{
    latitude: -18.78825,
    longitude: -45.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  />
));

stories.add('With width', () => (
  <Map width={200} />
));

stories.add('With height', () => (
  <Map height={200} />
));

stories.add('Markers', () => (
  <Map
    markers={[
      {
        latitude: 37.78825,
        longitude: -122.4324,
        title: 'Marker',
        type: 'icon-name',
      },
    ]}
    markerImages={{
      'icon-name': marketIcon,
    }}
  />
));
