import React from 'react';
import { Dimensions, ScrollView } from 'react-native'
import Label from '../Label';
import Colors from '../Colors';
import styled from 'styled-components'
const View = styled.View`
    margin-top: ${props => props.marginTop};
    align-items: center;
    width: ${props => props.deviceWidth};
    background-color: ${props => props.color};
`;

const Container = (props) => {

    const deviceWidth = Dimensions.get('window').width;
    const { children, topXs, topXl, topXxl, middle, primary, secondary, white, width } = props;
    const containerWidth = width || deviceWidth;

    const color = (primary, secondary) =>{
        if(primary){
            return Colors.primary.defaultHeightOpacity;
        }
        if(secondary){
            return Colors.secondary.defaultHeightOpacity;
        }
        if(white){
            return Colors.primary.bg;
        }
        return 'transparent';
    }
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
    const colorValue = color(primary, secondary);


    return (
        <View marginTop={marginTopValue} deviceWidth={containerWidth} color={colorValue}>{children}</View>
    );
};

Container.defaultProps = {
    children: <Label value="Some Value" xxl />
}

export default Container;