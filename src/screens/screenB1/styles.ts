import { StyleSheet } from 'react-native';
import {
  BACKGROUND_SCREEN_B1,
  SCROLL_VIEW_MASK_COLOR,
  SCROLL_VIEW_TEXT_COLOR,
} from '../../utils/constants/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: BACKGROUND_SCREEN_B1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    fontSize: 50,
    color: SCROLL_VIEW_TEXT_COLOR,
  },
  flatList: {
    height: '100%',
  },
  mask: {
    backgroundColor: SCROLL_VIEW_MASK_COLOR,
    opacity: 0.2,
    width: '100%',
    height: 80,
    position: 'absolute',
  },
  rightArrowIcon: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});
