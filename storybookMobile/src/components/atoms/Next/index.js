import React from 'react';
import { Dimensions } from 'react-native';
import Colors from '../Colors';
import Label from '../Label';
import Svg from '../Svg';
import { Button as NativeButton, Text, Spinner, View } from 'native-base';
import styled from 'styled-components/native';
const MextStyle = styled(NativeButton)``

const Next = (props) => {

    const {
        onPress,
        disabled,
        loading,
        secondary
    } = props;

    const backgroundColor = (secondary, disabled, loading) => {
        if (secondary && (disabled || loading)) {
            return Colors.secondary.disabled;
        }
        if (disabled || loading) {
            return Colors.primary.disabled;
        }
        if (secondary) {
            return Colors.secondary.defaultHeightOpacity;
        }
        return Colors.primary.defaultHeightOpacity;
    }

    const spinnerColor = () => {
        return Colors.primary.loading;
    }

    const buttonStyle = {
        justifyContent: 'center',
        backgroundColor: backgroundColor(secondary, disabled, loading),
        borderRadius: 100,
        width: 60,
        height: 60
    }

    return (
        <View>
            <MextStyle onPress={onPress} disabled={disabled || loading} style={buttonStyle}>
                {loading || <Svg spriteId="arrow_foward" width="20" height="20"/>}
                {loading && <Spinner color={spinnerColor()} />}
            </MextStyle>
        </View>
    );
};

Next.defaultProps = {
    onPress: () => alert('Some event Click'),
    disabled: false,
    loading: false,
}

export default Next;