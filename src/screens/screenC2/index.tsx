import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { screenC2Prop } from '../../types/navigation';
import LeftArrowIcon from '../../assets/icons/leftArrow';
import { useLoading } from '../../hooks/useLoadingIcon';
import Description from '../../components/Description';

import styles from './styles';
import Title from '../../components/Title';
import { SCREENS } from '../../utils/constants/screens';
import { SCREEN_C_VISIBILITY_TIME } from '../../utils/constants/common';
import { getRLoginApi } from '../../api';

const ScreenC2: FC<screenC2Prop> = ({ navigation, route }) => {
  const selectedItem = route.params;
  const [isLoadingIcon, setIsLoadingIcon] = useState<boolean>(true);
  const { isLoading } = useLoading(async () => {
    try {
      const res = await getRLoginApi();
      if (res.status === 200) {
        setIsLoadingIcon(isLoading);
        navigation.navigate(SCREENS.SCREEN_D);
      }
    } catch (err: any) {
      console.log(err, JSON.stringify(err));
    }
  }, SCREEN_C_VISIBILITY_TIME);

  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.leftArrowIcon}>
          <LeftArrowIcon />
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Title title={selectedItem.name} />
        <Description description={selectedItem.description} />
      </View>
      {isLoadingIcon && (
        <ActivityIndicator size={'large'} style={styles.loadingIcon} />
      )}
    </View>
  );
};

export default ScreenC2;
