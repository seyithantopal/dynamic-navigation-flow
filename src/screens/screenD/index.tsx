import React, { FC, useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import { screenDProp } from '../../types/navigation';

import TickIcon from '../../assets/icons/tick';
import styles from './styles';
import Storage from '../../services/storage';
import { LAST_SCREEN_KEY } from '../../utils/constants/common';

const ScreenD: FC<screenDProp> = () => {
  useEffect(() => {
    const backAction = (): boolean => true;
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  useEffect(() => {
    const clearAllStorage = async () => {
      await Storage.removeData(LAST_SCREEN_KEY);
      await Storage.clearAll();
    };
    clearAllStorage();
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
