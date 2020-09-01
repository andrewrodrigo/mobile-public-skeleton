import React from 'react';
import { Button as NativeButton, Text } from 'native-base';
class Button extends React.Component {

    render() {

        const { onPress, title, disabled } = this.props;

        return (
            <NativeButton onPress={onPress} disabled={disabled}>
                <Text>{title}</Text>
            </NativeButton>
        );
    }
};

Button.defaultProps = {
    onPress: () => alert('Some event Click'),
    title: 'Some Title',
    disabled: false
}

export default Button;