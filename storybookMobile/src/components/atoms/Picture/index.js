import React, { useState } from 'react';
import { Dimensions, Image, View } from 'react-native'
import Colors from '../Colors';
import Label from '../Label';
import Svg from '../Svg';
import Button from '../Button';
import Messages from '../Messages';
import styled from 'styled-components/native';
import { image } from './base64Image';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';
// TODO Externalizar o arquivo base64 depois

const StyledView = styled.View``;

const StyledCameraButtonView = styled.View`
    flex: 1;
    background-color: transparent;
    flex-direction: column;
    align-self: center;
    position: absolute;
    top: 90%;
`;

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

    const { picture, camera, form, field } = props;
    let cameraInstance = null;
    const [isCameraShow, showCameraState] = useState(null);
    const [base64Image, setBase64Image] = useState(null);
    const { width, height } = Dimensions.get('window');
    const cameraStyle = {
        flex: 1,
        height: height * 0.9,
        width,
        zIndex: 100
    }

    const snapPhoto = async () => {
        if (cameraInstance) {
            const options = {
                quality: 0, 
                base64: true, 
                fixOrientation: true, 
                fastMode: true,
                skipProcessing: true,
                exif: true,
                onPictureSaved: async (foto)=>{
                    const { base64 } = foto;
                    form[field] = base64;
                    setBase64Image(`data:image/jpeg;base64,${base64}`);
                    showCameraState(false);
                }
            };
            await cameraInstance.takePictureAsync(options);
        }
    }

    const showCamera = () => {
        return (
            <Camera style={cameraStyle} ref={(ref) => { cameraInstance = ref }}>
                <StyledCameraButtonView>
                    <Button onPress={snapPhoto} title="Tirar Foto" />
                </StyledCameraButtonView>
            </Camera>
        )
    }

    const renderGalery = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            return Messages({
                title: 'Precisamos da sua permissão',
                msg: 'Para acessarmos a Galera precisamos de sua permissão',
                firstActionText: 'Ok!',
                firstCallBack: () => { },
                cancelable: true
            });
        } else {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true
            });
            if (!result.cancelled) {
                const { base64 } = result;
                const image = `data:image/jpeg;base64,${base64}`
                form[field] = image;
                setBase64Image(image)
            }
        }
    }

    const popPictureOrGalery = () => {
        return Messages({
            title: 'Adicione sua foto',
            msg: 'Deseja selecionar da galeria ou tirar um foto agora?',
            firstActionText: 'Galeria',
            firstCallBack: renderGalery,
            secondActionText: 'Tirar foto',
            secondCallBack: () => showCameraState(true),
            cancelable: true
        });
    }

    const renderBlankImage = (camera) => {
        if (camera) {
            return (
                <StyledNoPictureTouchable onPress={popPictureOrGalery}>
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
                <StyledTouchable onPress={popPictureOrGalery}>
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

    if (isCameraShow) {
        return (
            showCamera()
        );
    }
    if (picture || base64Image) {
        return (
            renderImage(base64Image || picture, camera)
        )
    }
    return renderBlankImage(camera)
};

Picture.defaultProps = {
    camera: true,
    picture: image,
    form: {
        picture: null
    },
    field: "picture"
}

export default Picture;