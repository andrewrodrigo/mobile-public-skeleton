import { Alert } from 'react-native'

const DefaultMessage = (props) => {
    const { title, msg, firstActionText, firstCallBack, secondActionText, secondCallBack, cancelable } = props;

    const messageEvents = [];

    if (firstActionText && firstCallBack) {
        messageEvents.push({ text: firstActionText, onPress: firstCallBack });
    }

    if (secondActionText && secondCallBack) {
        messageEvents.push({ text: secondActionText, onPress: secondCallBack });
    }

    return Alert.alert(
        title,
        msg,
        messageEvents,
        { cancelable }
    )
}

DefaultMessage.defaultProps = {
    title: 'Some title!',
    msg: 'Some message',
    firstActionText: 'First',
    firstCallBack: () => { console.warn('First CallBack') },
    secondActionText: 'Second',
    secondCallBack: () => { console.warn('Second CallBack') },
    cancelable: true
}

export default DefaultMessage;