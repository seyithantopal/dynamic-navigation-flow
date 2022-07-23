import React, { FC } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { screenDProp } from '../../types/navigation';

import LeftArrowIcon from '../../assets/icons/leftArrow';
import TickIcon from '../../assets/icons/tick';
import styles from './styles';

const ScreenD: FC<screenDProp> = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.leftArrowIcon}>
          <LeftArrowIcon />
        </View>
      </TouchableWithoutFeedback>
      <View>
        <TickIcon />
      </View>
    </View>
  );
};

export default ScreenD;
