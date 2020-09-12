import React from 'react';
import { Dimensions } from 'react-native'
import Colors from '../Colors'
import Label from '../Label'
import styled from 'styled-components/native';

const ViewText = styled.View`
    text-align: center
    margin-left: 2%
    margin-right: 2%
`;

const ViewBox = styled.View`
    flex-direction: row
    align-items: center
    margin-left: 5%
    margin-right: 5%
`;
const ViewLine = styled.View`
    flex: 1
    height: ${props => props.withLine ? '2' : '0'};
    background-color: ${Colors.primary.divider}
`;


const Divider = (props) => {

    const { text, withLine } = props;

    const renderLine = (text) => {
        return (
            <ViewText>
                <Label value={text} />
            </ViewText>
        )
    }

    return (
        <ViewBox>
            <ViewLine withLine={withLine} />
            {text && renderLine(text)}
            <ViewLine withLine={withLine} />
        </ViewBox>
    );
};

Divider.defaultProps = {
    value: 'Some Label'
}

export default Divider;