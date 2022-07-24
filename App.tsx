import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import Storage from './src/services/storage';
import { RootStackParamList } from './src/screens/RootStackParamList';
import { SCREENS } from './src/utils/constants/screens';
import { LAST_SCREEN_KEY, SESSION_ID_KEY } from './src/utils/constants/common';

// Screens
import ScreenA from './src/screens/screenA';
import ScreenB1 from './src/screens/screenB1';
import ScreenB2 from './src/screens/screenB2';
import ScreenB3 from './src/screens/screenB3';
import ScreenC1 from './src/screens/screenC1';
import ScreenC2 from './src/screens/screenC2';
import ScreenD from './src/screens/screenD';
import HomeScreen from './src/screens/homeScreen';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(() => {
    const fetchRLogin = async () => {
      try {
        const res = await axios.get('http://192.168.1.104:3000/rLogin');
        if (res && res.data) {
          await Storage.storeData(SESSION_ID_KEY, res.data.sessionId);
        }
        console.log('res: ', res.data);
      } catch (err: any) {
        console.log(err, JSON.stringify(err));
      }
    };
    fetchRLogin();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.HOME}
        screenListeners={({ route }) => ({
          state: () => {
            Storage.storeData(LAST_SCREEN_KEY, route.name);
          },
        })}>
        <Stack.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.SCREEN_A}
          component={ScreenA}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.SCREEN_B1}
          component={ScreenB1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.SCREEN_B2}
          component={ScreenB2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.SCREEN_B3}
          component={ScreenB3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.SCREEN_C1}
          component={ScreenC1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.SCREEN_C2}
          component={ScreenC2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.SCREEN_D}
          component={ScreenD}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
