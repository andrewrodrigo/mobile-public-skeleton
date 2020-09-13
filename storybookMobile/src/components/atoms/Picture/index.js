import React from 'react';
import { Dimensions, Image } from 'react-native'
import Colors from '../Colors'
import Svg from '../Svg'
import Label from '../Label'
import styled from 'styled-components/native';
import { image } from './base64Image';
// TODO Externalizar o arquivo base64 depois

const StyledView = styled.View``;

const StyledTouchable = styled.TouchableOpacity``;

const StyledCameraView = styled.View`
    margin-left: 75;
    margin-top: -18;
    backgroundColor: ${Colors.primary.defaultHeightOpacity};
    width: 30;
    height: 30;
    justify-content: center;
    align-items: center;
    border-radius: 100;
`;

const StyledImage = styled.Image`
    justify-content: center;
    border-color: ${Colors.primary.defaultHeightOpacity};
    border-radius: 100;
    border-width: 2;
    width: 120;
    height: 120;
`;

const StyledNoPictureView = styled.View`
    justify-content: center;
    border-color: ${Colors.primary.defaultHeightOpacity};
    border-width: 2;
    border-radius: 100;
    width: 120;
    height: 120;
`

const StyledNoPictureTouchable = styled.TouchableOpacity`
    justify-content: center;
    border-color: ${Colors.primary.defaultHeightOpacity};
    border-width: 2;
    border-radius: 100;
    width: 120;
    height: 120;
`

const Picture = (props) => {

    const { picture, camera } = props

    // TODO CRIAR EVENTO DE EVOKE DA CAMERA COM CLICK
    const renderBlankImage = (camera) => {
        if (camera) {
            return (
                <StyledNoPictureTouchable>
                    <Svg width="120" height="120" spriteId="user" />
                    <StyledCameraView>
                        <Svg spriteId="linked_camera" width="20" height="20" />
                    </StyledCameraView>
                </StyledNoPictureTouchable>
            )
        }
        return (
            <StyledNoPictureView>
                <Svg width="120" height="120" spriteId="user" />
            </StyledNoPictureView>
        )
    }

    const renderImage = (picture, camera) => {
        if (camera) {
            return (
                <StyledTouchable>
                    <StyledImage source={{ uri: picture }} />
                    <StyledCameraView>
                        <Svg spriteId="linked_camera" width="20" height="20" />
                    </StyledCameraView>
                </StyledTouchable>
            )
        }
        return (
            <StyledImage source={{ uri: picture }} />
        )
    }

    return (
        picture ? renderImage(picture, camera) : renderBlankImage(camera)
    );
};

Picture.defaultProps = {
    camera: true,
    picture: image
}

export default Picture;