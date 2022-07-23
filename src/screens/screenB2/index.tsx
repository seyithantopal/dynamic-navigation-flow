import React, { FC, useState } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import Checkbox from '../../components/Checkbox';
import { IOptions } from '../../types/interfaces';
import { screenB2Prop } from '../../types/navigation';
import RightArrowIcon from '../../assets/icons/rightArrow';
import { mockData } from '../../utils/constants/mockData';

import styles from './styles';

const ScreenB2: FC<screenB2Prop> = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState<IOptions | null>(null);

  const handleChange = (item: IOptions | null) => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={mockData}
        contentContainerStyle={styles.flatList}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>There is no record</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View>
              <Checkbox handleChange={handleChange} item={item} />
            </View>
          );
        }}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          if (selectedItem) {
            navigation.navigate('ScreenC2', {
              name: selectedItem?.name,
              description: selectedItem?.description,
            });
          }
        }}>
        <View style={styles.rightArrowIcon}>
          <RightArrowIcon />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ScreenB2;
