import React, { FC, useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import { screenDProp } from '../../types/navigation';

import TickIcon from '../../assets/icons/tick';
import styles from './styles';

const ScreenD: FC<screenDProp> = () => {
  useEffect(() => {
    const backAction = (): boolean => true;
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <View style={styles.wrapper}>
      <View>
        <TickIcon />
      </View>
    </View>
  );
};

export default ScreenD;
