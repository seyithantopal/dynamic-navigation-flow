import React, { FC, useState } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import Checkbox from '../../components/Checkbox';
import { IOptions } from '../../types/interfaces';
import { screenB2Prop } from '../../types/navigation';
import RightArrowIcon from '../../assets/icons/rightArrow';

import styles from './styles';

const mockData: IOptions[] = [
  {
    name: 'Option 1',
    description: 'Lorem ipsum',
  },
  {
    name: 'Option 2',
    description: 'Lorem ipsum',
  },
  {
    name: 'Option 3',
    description: 'Lorem ipsum',
  },
  {
    name: 'Option 4',
    description: 'Lorem ipsum',
  },
  {
    name: 'Option 5',
    description: 'Lorem ipsum',
  },
];

const ScreenB2: FC<screenB2Prop> = () => {
  const [selectedItem, setSelectedItem] = useState<IOptions>();

  const handleChange = (item: IOptions) => {
    console.log('handleCheck', item);
    setSelectedItem(item);
  };

  return (
    <View style={styles.wrapper}>
      <Text>SCREENB2</Text>
      <FlatList
        data={mockData}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        // style={styles.hotelList}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>There is no record</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => console.log('item: ', item)}>
              <View>
                <Checkbox handleChange={handleChange} item={item} />
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
      <TouchableWithoutFeedback
        onPress={() => console.log('clicked!', selectedItem)}>
        <View style={styles.rightArrowIcon}>
          <RightArrowIcon />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ScreenB2;
