import React from 'react';
import { Dimensions } from 'react-native'
import NativeSvg, { Path, G } from 'react-native-svg';
// import styled from 'styled-components/native';
// const sprites = require('./sprites.json')
import sprites from './sprites.json'


const Svg = (props) => {
    const { spriteId, height, width } = props;

    const sprite = sprites.svg.find(x => x.spriteId === spriteId) || "triangles";

    const pathMap = (form) => {
        return <Path key={form.id} d={form.trace} fill={form.fill} fillOpacity="1" />
    }

    return (
        <NativeSvg
            height={height}
            width={width}
            viewBox={sprite.viewBox}
        >
            <G>
                {sprite.forms.map(form => pathMap(form))}
            </G>
        </NativeSvg>
    );
};

Svg.defaultProps = {
    spriteId: 'triangles',
    //TODO Colocar tamanho dinamico proporcional a tela do device
    width: "373",
    height: "501"
}

export default Svg;