import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { getRFetchExperimentsApi } from '../../api';
import Storage from '../../services/storage';
import { screenAProp } from '../../types/navigation';
import { R_EXPERIMENTS_KEY } from '../../utils/constants/common';
import { options } from '../../utils/constants/mockData';
import { SCREENS } from '../../utils/constants/screens';

import styles from './styles';

const ScreenA: FC<screenAProp> = ({ navigation }) => {
  const [screen, setScreen] = useState<string | null>('');

  useEffect(() => {
    const getRExperimentsFromStorage = async () => {
      try {
        Storage.clearAll();
        const value = await Storage.getData(R_EXPERIMENTS_KEY);
        setScreen(value);
      } catch (e) {
        console.log(
          'Something went wrong during getting rExperiments from storage: ',
          e,
        );
      }
    };
    getRExperimentsFromStorage();
  }, []);

  useEffect(() => {
    const fetchRFetchExperiments = async () => {
      try {
        const res = await getRFetchExperimentsApi();
        await Storage.storeData(R_EXPERIMENTS_KEY, res.data);
        setScreen(res.data);
      } catch (err: any) {
        console.log(err, JSON.stringify(err));
      }
    };
    if (screen === null) {
      fetchRFetchExperiments();
    }
    if (screen !== null && screen !== '') {
      const capitalizedScreen = `${screen
        ?.charAt(0)
        .toUpperCase()}${screen?.slice(1)}`;

      if (capitalizedScreen === SCREENS.NO_SCREEN_B) {
        handleNavigate(SCREENS.SCREEN_C2, options[0]);
      } else {
        handleNavigate(capitalizedScreen);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  const handleNavigate = (sc: any, params?: any) => {
    navigation.navigate(sc, params);
  };

  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default ScreenA;
