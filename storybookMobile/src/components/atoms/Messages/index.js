import React from 'react';
import { Alert } from 'react-native'

const defaultMessage = (
    obj = {
        title: 'Some title!',
        msg: 'Some message',
        firstActionText: 'First',
        firstCallBack: () => { console.warn('Second CallBack') },
        secondActionText: 'Second',
        secondCallBack: () => { console.warn('Second CallBack') },
        cancelable: true
    }
) => {
    const { title, msg, firstActionText, firstCallBack, secondActionText, secondCallBack, cancelable } = obj;

    const messageEvents = [];

    if (firstActionText && firstCallBack) {
        messageEvents.push({ text: firstActionText, onPress: firstCallBack });
    }

    if (secondActionText && secondCallBack) {
        messageEvents.push({ text: secondActionText, onPress: secondCallBack });
    }

    Alert.alert(
        title,
        msg,
        messageEvents,
        { cancelable }
    )
}

module.exports = {
    defaultMessage
};