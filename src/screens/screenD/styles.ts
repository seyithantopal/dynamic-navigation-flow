import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36d0ff',
  },
  sub: {
    width: '75%',
  },
  description: {
    fontSize: 21,
    textAlign: 'center',
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
