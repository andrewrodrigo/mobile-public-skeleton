import React from 'react'
import { View } from 'native-base';
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import Input from './index'

const buttonStories = storiesOf('Input', module);

buttonStories.addDecorator(withKnobs);

buttonStories.add('Default', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Input form={{ input: '' }} field='input' />
    </View>
)

buttonStories.add('Disabled', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Input disabled={boolean('disabled', true)} form={{ input: '' }} field='input' />
    </View>
)

buttonStories.add('Input Cpf', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Input mask={text('mask: cpf|cnpj|phone', 'cpf')} form={{ input: '11636540783' }} field='input' />
    </View>
)

buttonStories.add('Input Cnpj', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Input mask={text('mask: cpf|cnpj|phone', 'cnpj')} form={{ input: '13321906000150' }} field='input' />
    </View>
)

buttonStories.add('Input Phone', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Input mask={text('mask: cpf|cnpj|phone', 'phone')} form={{ input: '21981670333' }} field='input' />
    </View>
)

buttonStories.add('Custom KeyUpCallBack', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Input form={{ input: '' }} field='input' keyUpCallBack={valueChanged =>{ alert(`KeyUp => ${valueChanged}`)}}/>
    </View>
)

buttonStories.add('Input XS', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Input form={{ input: '' }} field='input' xs={boolean('xs', true)}/>
    </View>
)

buttonStories.add('Input XL', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Input form={{ input: '' }} field='input' xl={boolean('xl', true)}/>
    </View>
)

buttonStories.add('Input XXL', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Input form={{ input: '' }} field='input' xxl={boolean('xxl', true)}/>
    </View>
)

const avaiableKeyBoardTypes = [
    'numeric',
    'default',
    'email-address',
    'phone-pad',
    'number-pad',
    'ascii-capable',
    'numbers-and-punctuation',
    'url',
    'name-phone-pad',
    'decimal-pad',
    'twitter',
    'web-search',
    'ascii-capable-number-pad',
    'visible-password']
buttonStories.add('Keyboard Type', () =>
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Input form={{ input: '' }} field='input' keyboardType={text(`keyboardType: ${avaiableKeyBoardTypes.join('|')}`, 'jaisjasiasi')}/>
    </View>
)
