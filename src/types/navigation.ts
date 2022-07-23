import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../screens/RootStackParamList';
import { SCREEN_A, SCREEN_B2 } from '../utils/constants/screens';

export type screenAProp = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_A
>;

export type screenB2Prop = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_B2
>;
