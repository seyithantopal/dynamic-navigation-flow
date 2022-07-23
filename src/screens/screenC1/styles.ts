import { StyleSheet } from 'react-native';
import { BACKGROUND_SCREEN_C1 } from '../../utils/constants/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_SCREEN_C1,
  },
  leftArrowIcon: {
    position: 'absolute',
    left: 0,
    top: 30,
  },
  loadingIcon: {
    marginTop: 25,
  },
});
