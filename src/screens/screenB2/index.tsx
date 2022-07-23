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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: 'Option 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: 'Option 3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: 'Option 4',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: 'Option 5',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const ScreenB2: FC<screenB2Prop> = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState<IOptions>();

  const handleChange = (item: IOptions) => {
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
