import React from 'react';
import { Dimensions } from 'react-native';
import { DatePicker as NativeDatePicker } from 'native-base';

const DatePicker = (props) => {
  const {
    defaultDate,
    minimumDate,
    maximumDate,
    locale,
    transparent,
    placeHolderText,
    form,
    field,
    disabled,
  } = props;

  const onDateChange = (value) => {
    const newValue = value;
    form[field] = newValue;
  };

  return (
    <NativeDatePicker
      defaultDate={defaultDate}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      locale={locale}
      transparent={transparent}
      placeHolderText={placeHolderText}
      placeHolderTextStyle={{ color: disabled ? '#bdc3c7' : 'black' }}
      onDateChange={onDateChange}
      disabled={disabled}
    />
  );
};

/* DatePicker.propTypes = {
  xs: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  defaultDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  maximumDate: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
  transparent: PropTypes.bool,
  placeHolderText: PropTypes.string,
  form: PropTypes.objectOf(PropTypes.object()).isRequired,
  field: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}; */

DatePicker.defaultProps = {
  xs: true,
  xl: false,
  xxl: false,
  defaultDate: new Date(),
  minimumDate: new Date('1901-01-01T00:00:00'),
  maximumDate: new Date(),
  locale: 'pt-br',
  transparent: true,
  placeHolderText: 'Select a date',
  disabled: false,
};

export default DatePicker;
