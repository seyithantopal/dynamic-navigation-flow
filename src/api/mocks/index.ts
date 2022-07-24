import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { SCREENS } from '../../utils/constants/screens';
import { getRandom, uuidv4 } from '../../utils/utils';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.104:3000',
});

const mock = new AxiosMockAdapter(
  process.env.NODE_ENV === 'development' ? axiosInstance : axios,
);

const screensData = [
  SCREENS.SCREEN_B1,
  SCREENS.SCREEN_B2,
  SCREENS.SCREEN_B3,
  SCREENS.NO_SCREEN_B,
];

mock.onGet('rLogin').reply(() => {
  return [
    200,
    {
      sessionId: uuidv4(),
    },
  ];
});

mock.onGet('rFetchExperiments').reply(() => {
  const randomIndex = getRandom(screensData.length);
  return [200, screensData[randomIndex]];
});

export default axiosInstance;
