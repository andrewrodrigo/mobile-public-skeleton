import React from 'react';
import { Dimensions } from 'react-native'
import Label from '../Label'
import styled from 'styled-components'
const View = styled.View`
    margin-top: ${props => props.marginTop};
    margin-left: 20px;
    margin-right: 20px;
`;

const Container = (props) => {

    const { children, topXs, topXl, topXxl } = props;
    const marginTop = (topXs, topXl, topXxl) => {
        if (topXs) {
            return '10px';
        }
        if (topXl) {
            return '20px';
        }
        if (topXxl) {
            return '40px'
        }
        return '0px'
    }

    const marginTopValue = marginTop(topXs, topXl, topXxl);


    return (
        <View marginTop={marginTopValue}>{children}</View>
    );
};

Container.defaultProps = {
    children: <Label value="Some Value" xxl />
}

export default Container;