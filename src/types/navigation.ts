import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../screens/RootStackParamList';
import { SCREEN_A } from '../utils/constants/screens';

export type screenAProp = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_A
>;
