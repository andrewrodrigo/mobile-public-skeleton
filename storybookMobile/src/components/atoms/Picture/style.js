import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../Colors';

const { width, height } = Dimensions.get('window');

const cameraStyle = {
  flex: 1,
  height: height * 0.9,
  width,
  zIndex: 100,
};

const StyledCameraButtonView = styled.View`
    flex: 1;
    background-color: transparent;
    flex-direction: column;
    align-self: center;
    position: absolute;
    top: 90%;
`;

const StyledCameraView = styled.View`
    margin-left: 75;
    margin-top: -18;
    border-color: ${props => props.borderColor};
    width: 30;
    height: 30;
    justify-content: center;
    align-items: center;
    border-radius: 100;
    background-color: ${props => props.bgColor};
`;

const StyledImage = styled.Image`
    justify-content: center;
    border-color: ${props => props.borderColor};
    border-radius: 100;
    border-width: 2;
    width: 120;
    height: 120;
`;

const StyledNoPictureView = styled.View`
    justify-content: center;
    border-color: ${props => props.borderColor};
    border-width: 2;
    border-radius: 100;
    width: 120;
    height: 120;
    background-color: ${props => props.bgColor};
`;

const StyledNoPictureTouchable = styled.TouchableOpacity`
    justify-content: center;
    border-color: ${props => props.borderColor};
    border-width: 2;
    border-radius: 100;
    width: 120;
    height: 120;
    background-color: ${props => props.bgColor};
`;

export {
  StyledCameraButtonView,
  StyledCameraView,
  StyledImage,
  StyledNoPictureTouchable,
  StyledNoPictureView,
  cameraStyle,
};
