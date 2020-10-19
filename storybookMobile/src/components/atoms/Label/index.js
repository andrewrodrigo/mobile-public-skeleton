import React from 'react';
import { Dimensions } from 'react-native'
import Colors from '../Colors'
import Svg from '../Svg'
import { Text as NativeText, View } from 'native-base';
// import styled from 'styled-components/native';


const Label = (props) => {

    const { value, fontWeight, xs, xl, xxl, justify, margins, primary, secondary, white, marginLeft, leftSvg, rightSvg, onPress } = props;
    const avaiableFontWeight = ['normal', 'bold'];
    const deviceWidth = Dimensions.get('window').width;

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

    //TODO Criar o styled component do label
    const color = (primary, secondary, white) => {
        if (primary) {
            return Colors.primary.defaultHeightOpacity;
        }
        if (secondary) {
            return Colors.secondary.defaultHeightOpacity;
        }
        if (white) {
            return Colors.globals.reverseText;
        }
        return Colors.globals.text;
    }

    const selectedColor = color(primary, secondary, white);

    const style = {
        fontWeight: avaiableFontWeight.find(x => x === fontWeight) || 'normal',
        fontSize: fontSize(xs, xl, xxl),
        textAlign: justify ? 'justify' : 'auto',
        color: selectedColor,
        marginLeft: marginLeft ? 10 : 0
    }

    if (margins) {
        style.width = deviceWidth * 0.9
    }

    return (
        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: marginLeft ? 10 : 0}}>
            {leftSvg && <Svg spriteId={leftSvg} fill={selectedColor} height="20" width="20"/>}
            <NativeText style={style} onPress={onPress}>{value}</NativeText>
            {rightSvg && <Svg spriteId={rightSvg} fill={selectedColor} height="20" width="20"/>}
        </View>
    );
};

Label.defaultProps = {
    value: 'Some Label'
}

export default Label;