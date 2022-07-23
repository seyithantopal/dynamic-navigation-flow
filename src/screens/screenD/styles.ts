import { StyleSheet } from 'react-native';
import { BACKGROUND_SCREEN_D } from '../../utils/constants/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_SCREEN_D,
  },
  loadingIcon: {
    marginTop: 25,
  },
});
