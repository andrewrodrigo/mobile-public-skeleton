import React, { useState } from 'react';
import { Dimensions } from 'react-native'
import Colors from '../Colors'
import { Input as NativeInput, Item, Label } from 'native-base';
// import styled from 'styled-components/native';
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


const Input = (props) => {

    const {
        keyUpCallBack,
        placeholder,
        keyboardType,
        mask,
        form,
        field,
        disabled,
        xs, 
        xl, 
        xxl
    } = props;
    const value = form[field];
    const [, setStateInputValue] = useState(0);
    const getKeyboardType = avaiableKeyBoardTypes.find(x => x === keyboardType) || 'default'

    const width = (xs, xl, xxl) => {
        const deviceWidth = Dimensions.get('window').width;
        if (xs) {
            return deviceWidth * 0.3
        }
        if (xl) {
            return deviceWidth * 0.5
        }
        if (xxl) {
            return deviceWidth * 1
        }
        return deviceWidth * 0.9
    }

    const maskField = (value, mask) => {
        if (mask === 'cpf') {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
        }
        if (mask === 'phone') {
            return value.replace(/(\d{2})(\d{4})(\d{4})/g, "\($1) \$2\-\$3");
        }
        if (mask === 'cnpj') {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
        }
        return value;
    }

    const onChangeText = (changeValue) => {
        const newValue = maskField(changeValue, mask);
        form[field] = newValue
        if (keyUpCallBack) {
            keyUpCallBack(newValue);
        }
        setStateInputValue(newValue)
    }

    const inputValue = maskField(value, mask);

    const style ={
        width: width(xs, xl, xxl)
    }
    return (
        <Item floatingLabel style={style}>
            <Label>{placeholder}</Label>
            <NativeInput disabled={disabled} value={inputValue} onChangeText={changeValue => onChangeText(changeValue)} keyboardType={getKeyboardType} />
        </Item>
    );
};

Input.defaultProps = {
    placeholder: 'Some Placeholder',
    form: {
        input: ''
    },
    field: 'input'
}

export default Input;