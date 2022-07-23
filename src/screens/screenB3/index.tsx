import React, { FC } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { screenB3Prop } from '../../types/navigation';
import { mockData } from '../../utils/constants/mockData';
import RightArrowIcon from '../../assets/icons/rightArrow';
import Description from '../../components/Description';

import styles from './styles';

const ScreenB3: FC<screenB3Prop> = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Description description={mockData[0].description} />
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('ScreenC2', {
            name: mockData[0].name,
            description: mockData[0].description,
          });
        }}>
        <View style={styles.rightArrowIcon}>
          <RightArrowIcon />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ScreenB3;
