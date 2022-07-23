import React, { FC } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { screenAProp } from '../../types/navigation';

import styles from './styles';

const ScreenA: FC<screenAProp> = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Hello World</Text>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

export default ScreenA;
