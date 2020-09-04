import React from 'react';
import { Dimensions } from 'react-native'
import { Button as NativeButton, Text, Spinner } from 'native-base';
import styled from 'styled-components/native';
const ButtonStyle = styled(NativeButton)``


const Button = (props) => {

    const { onPress, title, disabled, loading, xs, xl, xxl } = props;
    
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

    const style = {
        width: width(xs, xl, xxl),
        justifyContent: 'center',
    }

    return (
        <ButtonStyle onPress={onPress} disabled={disabled} style={style}>
            {loading || <Text>{title}</Text>}
            {loading && <Spinner />}
        </ButtonStyle>
    );
};

Button.defaultProps = {
    onPress: () => alert('Some event Click'),
    title: 'Some Title',
    disabled: false
}

export default Button;