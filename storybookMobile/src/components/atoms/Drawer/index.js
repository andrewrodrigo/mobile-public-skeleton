import React from 'react';
import { Drawer as NativeDrawer, View } from 'native-base';
import GestureRecognizer from 'react-native-swipe-gestures'


const Drawer = (props) => {

    let drawer = null;

    const closeDrawer = () => {
        drawer._root.close()
    };
    const openDrawer = () => {
        drawer._root.open()
    };

    const { children } = props;
    const childrenArray = Array.isArray(children) ? children : [children];
    const drawablePage = childrenArray.find(x => x.props.drawablePage) || <View/>
    const contentFilter = childrenArray.filter(x => !x.props.drawablePage)
    const content = contentFilter.length ? contentFilter : [<View/>]

    // TODO COLOCAR NO COMPONENT
    const clonedDrawerPage = React.cloneElement(drawablePage, { closeDrawer, openDrawer, ...drawablePage.props })
    const contentMap = content.map(x=>React.cloneElement(x, { closeDrawer, openDrawer, ...x.props }))


    return (
        <NativeDrawer ref={(ref) => { drawer = ref }} content={clonedDrawerPage} onClose={closeDrawer}>
            <GestureRecognizer onSwipeRight={openDrawer} onSwipeLeft={closeDrawer}>
                {contentMap}
            </GestureRecognizer>
        </NativeDrawer>
    );
};

Drawer.defaultProps = {
    value: 'Some Drawer'
}

export default Drawer;

