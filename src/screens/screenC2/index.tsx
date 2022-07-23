import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { screenC2Prop } from '../../types/navigation';
import LeftArrowIcon from '../../assets/icons/leftArrow';
import { useLoading } from '../../hooks/useLoadingIcon';

import styles from './styles';
import Title from '../../components/Title';
import axios from 'axios';

const ScreenC2: FC<screenC2Prop> = ({ navigation, route }) => {
  const selectedItem = route.params;
  const [isLoadingIcon, setIsLoadingIcon] = useState<boolean>(true);
  const { isLoading } = useLoading(async () => {
    try {
      const res = await axios.get('http://192.168.1.104:3000/rLogin');
      if (res.status === 200) {
        setIsLoadingIcon(isLoading);
        navigation.push('ScreenD');
      }
    } catch (err: any) {
      console.log(err, JSON.stringify(err));
    }
  }, 3000);

  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.leftArrowIcon}>
          <LeftArrowIcon />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.sub}>
        <Title title={selectedItem.name} />
        <Text style={styles.description}>{selectedItem.description}</Text>
      </View>
      {isLoadingIcon && (
        <ActivityIndicator size={'large'} style={styles.loadingIcon} />
      )}
    </View>
  );
};

export default ScreenC2;
