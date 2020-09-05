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
        disabled
    } = props;
    const value = form[field];
    const [, setStateInputValue] = useState(0);
    const getKeyboardType = avaiableKeyBoardTypes.find(x => x === keyboardType) || 'default'

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

    const onChangeText = (changeValue, form, field) => {
        const newValue = maskField(changeValue, mask);
        form[field] = newValue
        if (keyUpCallBack) {
            keyUpCallBack(newValue);
        }
        setStateInputValue(newValue)
    }

    const inputValue = maskField(value, mask);

    return (
        <Item floatingLabel>
            <Label>{placeholder}</Label>
            <NativeInput disabled={disabled} value={inputValue} onChangeText={changeValue => onChangeText(changeValue, form, field)} keyboardType={getKeyboardType} />
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