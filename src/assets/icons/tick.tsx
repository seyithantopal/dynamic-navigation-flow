import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TICK_ICON_COLOR } from '../../utils/constants/colors';

export default () => (
  <Svg width={200} height={191} fill="none">
    <Path
      d="M100 16.667a83.333 83.333 0 1 0 0 166.666 83.333 83.333 0 0 0 0-166.666Zm47.3 68.641-50 45.834a8.334 8.334 0 0 1-11.525-.25l-25-25a8.343 8.343 0 0 1-2.544-5.922 8.334 8.334 0 0 1 14.327-5.862l19.359 19.359 44.116-40.442A8.335 8.335 0 0 1 147.3 85.308Z"
      fill={TICK_ICON_COLOR}
    />
  </Svg>
);
