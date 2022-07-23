import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import axios from 'axios';
import Storage from './src/services/storage';
import { RootStackParamList } from './src/screens/RootStackParamList';
import {
  SCREEN_A,
  SCREEN_B1,
  SCREEN_B2,
  SCREEN_B3,
  SCREEN_C1,
  SCREEN_C2,
  SCREEN_D,
  SCREEN_SAMPLE,
} from './src/utils/constants/screens';
import {
  ALREADY_LAUNCHED_KEY,
  SESSION_ID_KEY,
} from './src/utils/constants/common';

// Screens
import ScreenA from './src/screens/screenA';
import ScreenB1 from './src/screens/screenB1';
import ScreenB2 from './src/screens/screenB2';
import ScreenB3 from './src/screens/screenB3';
import ScreenC1 from './src/screens/screenC1';
import ScreenC2 from './src/screens/screenC2';
import ScreenD from './src/screens/screenD';
import ScreenSample from './src/screens/screenSample';

const App = () => {
  const [sessionId, setSessionId] = useState<string>('');
  const [alreadyLaunched, setAlreadyLaunched] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await Storage.getData(ALREADY_LAUNCHED_KEY);
        if (!!value === false) {
          await Storage.storeData(ALREADY_LAUNCHED_KEY, 'true');
        }
        setAlreadyLaunched(!!value);
        console.log('jsonValue: ', !!value);
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);

  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(() => {
    const fetchRLogin = async () => {
      try {
        const res = await axios.get('http://192.168.1.104:3000/rLogin');
        if (res && res.data) {
          setSessionId(res.data.sessionId);
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
      <Stack.Navigator>
        {alreadyLaunched ? (
          <Stack.Screen
            name={SCREEN_A}
            component={ScreenA}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name={SCREEN_SAMPLE}
            component={ScreenSample}
            options={{
              headerShown: true,
              headerRight: () => (
                <Button
                  onPress={() => console.log('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
            }}
          />
        )}
        <Stack.Screen
          name={SCREEN_B1}
          component={ScreenB1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_B2}
          component={ScreenB2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_B3}
          component={ScreenB3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_C1}
          component={ScreenC1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_C2}
          component={ScreenC2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_D}
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
