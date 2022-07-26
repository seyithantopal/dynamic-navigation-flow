import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';
import { IOptions } from '../../types/interfaces';

type Props = {
  handleChange: (item: IOptions | null) => void;
  item: IOptions;
};

const Checkbox: FC<Props> = ({ item, handleChange }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  return (
    <View>
      <View style={styles.wrapper}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue: boolean) => {
            if (newValue) {
              handleChange(item);
            } else {
              handleChange(null);
            }
            setToggleCheckBox(newValue);
          }}
        />
        <Text style={styles.optionName}>{item.name}</Text>
      </View>
    </View>
  );
};

export default Checkbox;
