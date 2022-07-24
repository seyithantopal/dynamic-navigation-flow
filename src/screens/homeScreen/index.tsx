import React, { FC, useEffect } from 'react';

import Storage from '../../services/storage';
import { HomeScreenProp } from '../../types/navigation';
import { LAST_SCREEN_KEY } from '../../utils/constants/common';
import { options } from '../../utils/constants/mockData';
import { SCREENS } from '../../utils/constants/screens';

const HomeScreen: FC<HomeScreenProp> = ({ navigation }) => {
  useEffect(() => {
    const getLastScreen = async () => {
      try {
        const value: string | null = await Storage.getData(LAST_SCREEN_KEY);
        if (!!value === false) {
          navigation.navigate(SCREENS.SCREEN_A);
        } else {
          navigation.navigate(value as SCREENS, options[0]);
        }
      } catch (e) {
        console.log('Something went wrong during opening the last screen');
      }
    };
    getLastScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default HomeScreen;
