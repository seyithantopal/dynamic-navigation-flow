import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Description: FC<{ description: string }> = ({ description }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Description;
