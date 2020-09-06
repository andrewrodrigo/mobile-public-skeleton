import React from 'react';
import { Dimensions } from 'react-native'
import Colors from '../Colors'
import { Text as NativeText } from 'native-base';
// import styled from 'styled-components/native';


const Label = (props) => {

    const { value, fontWeight, xs, xl, xxl } = props;
    const avaiableFontWeight = ['normal', 'bold'];

    const fontSize = (xs, xl, xxl) => {
        if (xs) {
            return 15
        }
        if (xl) {
            return 25
        }
        if (xxl) {
            return 35
        }
        return 15
    }

    const style = {
        fontWeight: avaiableFontWeight.find(x => x === fontWeight) || 'normal',
        fontSize: fontSize(xs, xl, xxl)
    }

    return (
        <NativeText style={style}>{value}</NativeText>
    );
};

Label.defaultProps = {
    value: 'Some Label'
}

export default Label;