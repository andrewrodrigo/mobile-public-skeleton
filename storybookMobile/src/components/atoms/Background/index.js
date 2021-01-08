import React from 'react';
import { Dimensions } from 'react-native';
import Svg from '../Svg';
import Label from '../Label';
import styled from 'styled-components'
const View = styled.View``;
const ViewAbsolute = styled.View`
    position: absolute; 
`;

const avaibleBackgrounds = ['triangles', 'green_triangles']

const heightProportion = {
    triangles: 1.34316353887,
    green_triangles: 1.34316353887
}

const Background = (props) => {

    const { width } = Dimensions.get('window');
    const { background, children } = props;
    const avaibleBackground = avaibleBackgrounds.find(x => x === background) || 'triangles'
    const proportion = heightProportion[avaibleBackground];
    const heigth = proportion * width;

    return (
        <View>
            <ViewAbsolute>
                <Svg spriteId={background} width={width} height={heigth} />
            </ViewAbsolute>
            {children}
        </View>
    );
};

Background.defaultProps = {
    background: 'triangles',
    children: <Label value="SomeValue" xxl />
}

export default Background;