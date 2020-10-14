import styled from 'styled-components/native';

import Colors from '../Colors';

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
`;

const StyledNoPictureTouchable = styled.TouchableOpacity`
    justify-content: center;
    border-color: ${Colors.primary.defaultHeightOpacity};
    border-width: 2;
    border-radius: 100;
    width: 120;
    height: 120;
`;

export {
  StyledCameraButtonView,
  StyledCameraView,
  StyledImage,
  StyledNoPictureTouchable,
  StyledNoPictureView,
};
