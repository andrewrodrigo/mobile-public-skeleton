import React from 'react';
import { ScrollView } from 'react-native'
import Colors from '../Colors';

const ScrollContent = (props) => {

    const { children, primary, secondary, white } = props;
    const color = (primary, secondary, white) =>{
        if(primary){
            return Colors.primary.defaultHeightOpacity;
        }
        if(secondary){
            return Colors.secondary.defaultHeightOpacity;
        }
        if(white){
            return Colors.globals.bg;
        }
        return 'transparent';
    }
    const selectedColor = color(primary, secondary, white);

    return (
        <ScrollView style={{ backgroundColor: selectedColor}}>{children}</ScrollView>
    );
};

export default ScrollContent;