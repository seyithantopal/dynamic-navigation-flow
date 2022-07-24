import { SCREENS } from '../../utils/constants/screens';
import { getRandom, uuidv4 } from '../../utils/utils';
import instance, { axiosMockAdapterInstance } from '../instance';

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.config.url === 'rLogin') {
      console.log('Error occurred. Retrying...');
      return new Promise(resolve => {
        resolve(instance(error.config));
      });
    } else {
      return Promise.reject(error);
    }
  },
);

const screensData = [
  SCREENS.SCREEN_B1,
  SCREENS.SCREEN_B2,
  SCREENS.SCREEN_B3,
  SCREENS.NO_SCREEN_B,
];

axiosMockAdapterInstance.onGet('rLogin').reply(() => {
  return [
    200,
    {
      sessionId: uuidv4(),
    },
  ];
});

axiosMockAdapterInstance.onGet('rFetchExperiments').reply(() => {
  const randomIndex = getRandom(screensData.length);
  return [200, screensData[randomIndex]];
});

export default instance;
