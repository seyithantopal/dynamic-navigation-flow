import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { screenAProp } from '../../types/navigation';

import styles from './styles';

const ScreenSample: FC<screenAProp> = () => {
  return (
    <View style={styles.wrapper}>
      <Text>ScreenSample</Text>
    </View>
  );
};

export default ScreenSample;
