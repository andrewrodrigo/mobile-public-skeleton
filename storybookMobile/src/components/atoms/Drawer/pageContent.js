import React from 'react';
import Button from '../Button'

const PageContent = (props) => {
    console.warn('PROPS CONTENT -->' , props)
    return (<Button onPress={props.openDrawer} title="PageContent"/>)
};

export default PageContent;
