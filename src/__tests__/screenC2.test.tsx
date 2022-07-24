import * as React from 'react';
import { render } from '@testing-library/react-native';
import ScreenC2 from '../screens/screenC2';
import { options } from '../utils/constants/mockData';

describe('Screen C2', () => {
  it('renders correctly', async () => {
    let props: any;
    const route = {
      params: {},
    };
    render(<ScreenC2 {...props} route={route} />);
  });

  it('should show Option 1 on the screen', async () => {
    let props: any;
    const route = {
      params: { name: options[0].name, description: options[0].description },
    };
    const { getByText } = render(<ScreenC2 {...props} route={route} />);
    const name = getByText(options[0].name);
    const description = getByText(options[0].name);
    expect(name).toBeTruthy();
    expect(description).toBeTruthy();
  });
});
