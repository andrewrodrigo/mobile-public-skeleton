import React from 'react';
import { ScrollView } from 'react-native'

const ScrollContent = (props) => {

    const { children } = props;

    return (
        <ScrollView>{children}</ScrollView>
    );
};

export default ScrollContent;