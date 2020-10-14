import React, { useState } from 'react';
import { Dimensions } from 'react-native'

import styled from 'styled-components'
const View = styled.View`
    height: ${props => props.height};
    width: ${props => props.width};
`;


const Spacer = (props) => {
    const { xs, xl, xxl } = props;
    const deviceWidth = Dimensions.get('window').width;
    const heigth = (xs, xl, xxl) => {
        if (xs) {
            return 10
        }
        if (xl) {
            return 40
        }
        if (xxl) {
            return 60
        }
        return 20
    }
    return (
        <View height={heigth(xs, xl, xxl)} width={deviceWidth} />
    );
};

export default Spacer;