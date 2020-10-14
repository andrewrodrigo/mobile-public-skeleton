import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

import Svg from '../Svg';
import Button from '../Button';
import Messages from '../Messages';
import {
  StyledCameraButtonView,
  StyledNoPictureView,
  StyledNoPictureTouchable,
  StyledImage,
  StyledCameraView,
} from './style';

const Picture = (props) => {
  const {
    picture, camera, form, field,
  } = props;
  let cameraInstance = null;
  const [isCameraShow, showCameraState] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const { width, height } = Dimensions.get('window');
  const cameraStyle = {
    flex: 1,
    height: height * 0.9,
    width,
    zIndex: 100,
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
        onPictureSaved: async (foto) => {
          const { base64 } = foto;
          form[field] = base64;
          setBase64Image(`data:image/jpeg;base64,${base64}`);
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
        firstCallBack: () => { },
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
      const image = `data:image/jpeg;base64,${base64}`;
      form[field] = image;
      setBase64Image(image);
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
  if (picture || base64Image) {
    return (
      renderImage(base64Image || picture, camera)
    );
  }
  return renderBlankImage(camera);
};

Picture.defaultProps = {
  camera: true,
  picture: 'base64',
  form: {
    picture: null,
  },
  field: 'picture',
};

export default Picture;
