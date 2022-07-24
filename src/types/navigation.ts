import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../screens/RootStackParamList';
import {
  HOME,
  SCREEN_A,
  SCREEN_B1,
  SCREEN_B2,
  SCREEN_B3,
  SCREEN_C1,
  SCREEN_C2,
  SCREEN_D,
} from '../utils/constants/screens';

export type HomeScreenProp = NativeStackScreenProps<
  RootStackParamList,
  typeof HOME
>;

export type screenAProp = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_A
>;

export type screenB1Prop = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_B1
>;

export type screenB2Prop = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_B2
>;

export type screenB3Prop = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_B3
>;

export type screenC1Prop = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_C1
>;

export type screenC2Prop = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_C2
>;

export type screenDProp = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_D
>;
