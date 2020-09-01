import { getStorybookUI, configure } from '@storybook/react-native'
import React from 'react'
import { NativeModules } from 'react-native'
import url from 'url'
import * as Font from 'expo-font';
import './rn-addons'

configure(async () => {
    Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }).then(require('./stories'));
}, module)

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL)

const StorybookUI = getStorybookUI({ port: 19001, host: hostname })

export default StorybookUI