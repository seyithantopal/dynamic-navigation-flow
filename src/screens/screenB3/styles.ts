import { StyleSheet } from 'react-native';
import { BACKGROUND_SCREEN_B3 } from '../../utils/constants/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: BACKGROUND_SCREEN_B3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  rightArrowIcon: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});
