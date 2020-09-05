import React from 'react';
import { Dimensions } from 'react-native'
import Colors from '../Colors'
import { Button as NativeButton, Text, Spinner } from 'native-base';
import styled from 'styled-components/native';
const ButtonStyle = styled(NativeButton)``


const Button = (props) => {

    const { onPress, title, disabled, loading, xs, xl, xxl, secondary } = props;

    const width = (xs, xl, xxl) => {
        const deviceWidth = Dimensions.get('window').width;
        if (xs) {
            return deviceWidth * 0.3
        }
        if (xl) {
            return deviceWidth * 0.5
        }
        if (xxl) {
            return deviceWidth * 1
        }
        return deviceWidth * 0.5
    }

    const backgroundColor = (secondary, disabled, loading) => {
        if(secondary && (disabled || loading)){
            return Colors.secondary.disabled;
        }
        if(disabled || loading){
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
        width: width(xs, xl, xxl),
        justifyContent: 'center',
        backgroundColor: backgroundColor(secondary, disabled, loading)
    }

    const spinnerStype = {
        color: spinnerColor()
    }

    return (
        <ButtonStyle onPress={onPress} disabled={disabled || loading} style={buttonStyle}>
            {loading || <Text>{title}</Text>}
            {loading && <Spinner color={spinnerColor()} />}
        </ButtonStyle>
    );
};

Button.defaultProps = {
    onPress: () => alert('Some event Click'),
    title: 'Some Title',
    disabled: false,
    loading: false,
    xl: true,
    
}

export default Button;