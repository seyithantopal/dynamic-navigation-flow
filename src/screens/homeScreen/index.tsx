import React, { FC, useEffect } from 'react';

import Storage from '../../services/storage';
import { HomeScreenProp } from '../../types/navigation';
import { LAST_SCREEN_KEY } from '../../utils/constants/common';
import { SCREENS } from '../../utils/constants/screens';

const HomeScreen: FC<HomeScreenProp> = ({ navigation }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const value: string | null = await Storage.getData(LAST_SCREEN_KEY);
        if (!!value === false) {
          navigation.push(SCREENS.SCREEN_A);
        } else {
          navigation.push(value as SCREENS);
        }
      } catch (e) {
        console.log('Something went wrong during opening the last screen');
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default HomeScreen;
