import React from 'react';
import { Dimensions } from 'react-native'
import Label from '../Label'
import styled from 'styled-components'
const View = styled.View`
    margin-top: ${props => props.marginTop};
    align-items: center;
    width: ${props => props.deviceWidth};
`;

const Container = (props) => {

    const deviceWidth = Dimensions.get('window').width;
    const { children, topXs, topXl, topXxl, middle } = props;
    const marginTop = (topXs, topXl, topXxl) => {
        if (topXs) {
            return '10px';
        }
        if (topXl) {
            return '20px';
        }
        if (topXxl) {
            return '40px';
        }
        if(middle){
            return '50%';
        }
        return '0px'
    }

    const marginTopValue = marginTop(topXs, topXl, topXxl, middle);


    return (
        <View marginTop={marginTopValue} deviceWidth={deviceWidth}>{children}</View>
    );
};

Container.defaultProps = {
    children: <Label value="Some Value" xxl />
}

export default Container;