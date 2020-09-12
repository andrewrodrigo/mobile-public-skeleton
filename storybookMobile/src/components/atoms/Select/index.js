import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Colors from '../Colors';
// Componente não existente no native base, foi preciso uma lib própria
import DropDownPicker from 'react-native-dropdown-picker';

const Select = (props) => {
    const {
        itens,
        form,
        field,
        disabled,
        changedCallBack,
        placeholder,
        searchablePlaceHolder,
        searchable,
        xs,
        xl,
        xxl
    } = props;

    const [value, setValue] = useState(null);
    const [items, setItems] = useState(itens || []);
    let controller;

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
        return deviceWidth * 1
    }

    const changeValue = (value) => {
        if (changedCallBack) {
            changedCallBack(value);
        }
        form[field] = value
        setValue(value);
    }

    const containerStyle = {
        width: width(xs, xl, xxl),
        height: 40
    }

    return (
        <DropDownPicker
            items={items}
            controller={instance => controller = instance}
            searchable={searchable}
            searchablePlaceholder={searchablePlaceHolder}
            onChangeList={(items, callback) => {
                new Promise((resolve, reject) => resolve(setItems(items)))
                    .then(() => callback())
                    .catch(() => { });
            }}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            containerStyle={containerStyle}
            placeholder={placeholder}
            defaultValue={value}
            disabled={disabled}
            onChangeItem={item => changeValue(item.value)}
        />
    );
};

Select.defaultProps = {
    itens: [],
    form: {
        value: null
    },
    field: 'value',
    searchable: false,
    searchablePlaceHolder: 'Search Some Item',
    placeholder: 'Select an Item'
}

export default Select;