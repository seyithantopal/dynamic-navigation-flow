import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;
