import { IChoices, IOptions } from '../types/interfaces';

export type RootStackParamList = {
  Home: undefined;
  ScreenA: undefined;
  ScreenB1: undefined;
  ScreenB2: undefined;
  ScreenB3: undefined;
  ScreenC1: IChoices;
  ScreenC2: IOptions;
  ScreenD: undefined;
  ScreenSample: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
