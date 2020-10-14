import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';
import Colors from '../Colors';
import Label from '../Label';
import Svg from '../Svg';
import Button from '../Button';
import Messages from '../Messages';
import {
  StyledCameraView,
  StyledImage,
  StyledNoPictureTouchable,
  StyledNoPictureView,
  StyledCameraButtonView,
  cameraStyle,
} from './style';

const Picture = (props) => {
  const {
    pictureFromComponent, camera, form, field,
  } = props;

  let cameraInstance = null;
  const [isCameraShow, showCameraState] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  const saveImage = (image) => {
    setBase64Image(`data:image/jpeg;base64,${image}`);
    form[field] = base64Image;
  };

  const snapPhoto = async () => {
    if (cameraInstance) {
      const options = {
        quality: 0,
        base64: true,
        fixOrientation: true,
        fastMode: true,
        skipProcessing: true,
        exif: true,
        onPictureSaved: async (image) => {
          const { base64 } = image;
          saveImage(base64);
          showCameraState(false);
        },
      };
      await cameraInstance.takePictureAsync(options);
    }
  };

  const showCamera = () => (
    <Camera style={cameraStyle} ref={(ref) => { cameraInstance = ref; }}>
      <StyledCameraButtonView>
        <Button onPress={snapPhoto} title="Tirar Foto" />
      </StyledCameraButtonView>
    </Camera>
  );

  const renderGalery = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);

    if (status !== 'granted') {
      return Messages({
        title: 'Precisamos da sua permissão',
        msg: 'Para acessarmos a Galera precisamos de sua permissão',
        firstActionText: 'Ok!',
        firstCallBack: () => {},
        cancelable: true,
      });
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      const { base64 } = result;
      saveImage(base64);
    }
  };

  const popPictureOrGalery = () => Messages({
    title: 'Adicione sua foto',
    msg: 'Deseja selecionar da galeria ou tirar um foto agora?',
    firstActionText: 'Galeria',
    firstCallBack: renderGalery,
    secondActionText: 'Tirar foto',
    secondCallBack: () => showCameraState(true),
    cancelable: true,
  });

  const renderBlankImage = (camera) => {
    if (camera) {
      return (
        <StyledNoPictureTouchable onPress={popPictureOrGalery}>
          <Svg width="120" height="120" spriteId="user" />
          <StyledCameraView>
            <Svg spriteId="linked_camera" width="20" height="20" />
          </StyledCameraView>
        </StyledNoPictureTouchable>
      );
    }
    return (
      <StyledNoPictureView>
        <Svg width="120" height="120" spriteId="user" />
      </StyledNoPictureView>
    );
  };

  const renderImage = (picture, camera) => {
    if (camera) {
      return (
        <TouchableOpacity onPress={popPictureOrGalery}>
          <StyledImage source={{ uri: picture }} />
          <StyledCameraView>
            <Svg spriteId="linked_camera" width="20" height="20" />
          </StyledCameraView>
        </TouchableOpacity>
      );
    }
    return (
      <StyledImage source={{ uri: picture }} />
    );
  };

  if (isCameraShow) {
    return (
      showCamera()
    );
  }

  const image = pictureFromComponent || base64Image;

  if (image) {
    return (
      renderImage(image, camera)
    );
  }

  return renderBlankImage(camera);
};

Picture.defaultProps = {
  camera: true,
  form: {
    picture: null,
  },
  field: 'picture',
};

export default Picture;
