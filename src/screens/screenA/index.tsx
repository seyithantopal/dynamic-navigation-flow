import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import Storage from '../../services/storage';
import { screenAProp } from '../../types/navigation';
import { R_EXPERIMENTS_KEY } from '../../utils/constants/common';

import styles from './styles';

const ScreenA: FC<screenAProp> = ({ navigation }) => {
  const [screen, setScreen] = useState<string | null>('');
  useEffect(() => {
    const getRExperiments = async () => {
      try {
        const value = await Storage.getData(R_EXPERIMENTS_KEY);
        console.log('aaa: ', value, typeof value);
        setScreen(value);
        /* if (value) {
          setScreen(value);
        } */
      } catch (e) {
        // error reading value
      }
    };
    getRExperiments();
  }, []);

  useEffect(() => {
    console.log('useEffect - screen: ', screen);
    const capitalizedScreen = `${screen
      ?.charAt(0)
      .toUpperCase()}${screen?.slice(1)}`;

    if (screen !== null && screen !== '') {
      handleNavigate(capitalizedScreen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  useEffect(() => {
    const fetchRFetchExperiments = async () => {
      try {
        const res = await axios.get(
          'http://192.168.1.104:3000/rFetchExperiments',
        );
        console.log('RExperimentRes: ', res.data);
        await Storage.storeData(R_EXPERIMENTS_KEY, res.data);
      } catch (err: any) {
        console.log(err, JSON.stringify(err));
      }
    };
    if (screen === null) {
      fetchRFetchExperiments();
    }
  }, [screen]);

  const handleNavigate = (sc: any) => {
    navigation.navigate(sc);
  };

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
