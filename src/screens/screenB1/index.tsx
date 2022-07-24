import React, { FC, useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
} from 'react-native';
import { screenB2Prop } from '../../types/navigation';
import RightArrowIcon from '../../assets/icons/rightArrow';
import { choices } from '../../utils/constants/mockData';

import styles from './styles';
import { SCREENS } from '../../utils/constants/screens';

const ScreenB1: FC<screenB2Prop> = ({ navigation }) => {
  const { height } = Dimensions.get('window');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const ITEM_HEIGHT = 100;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true },
  );
  return (
    <View style={styles.wrapper}>
      <Animated.FlatList
        data={choices}
        contentContainerStyle={{
          paddingTop: height / 2 - ITEM_HEIGHT / 2 + 20,
          paddingBottom: height / 2 - ITEM_HEIGHT / 2 - 20,
        }}
        scrollEventThrottle={16}
        snapToInterval={ITEM_HEIGHT}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        onScroll={onScroll}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>There is no record</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={{ height: ITEM_HEIGHT }}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        }}
        onMomentumScrollEnd={(event: any) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.y / ITEM_HEIGHT,
          );
          setSelectedIndex(newIndex);
        }}
      />
      <View style={styles.mask} />
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate(SCREENS.SCREEN_C1, {
            name: choices[selectedIndex].name,
            description: choices[selectedIndex].description,
          });
        }}>
        <View style={styles.rightArrowIcon}>
          <RightArrowIcon />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ScreenB1;
