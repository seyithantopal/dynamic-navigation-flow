import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from './src/services/storage';
import { RootStackParamList } from './src/screens/RootStackParamList';
import { SCREEN_A, SCREEN_SAMPLE } from './src/utils/constants/screens';

// Screens
import ScreenA from './src/screens/screenA';
import ScreenSample from './src/screens/screenSample';
import { Button } from 'react-native';
import axios from 'axios';
import { ALREADY_LAUNCHED_KEY, SESSION_ID_KEY } from './src/utils/constants/common';

const App = () => {
  const [sessionId, setSessionId] = useState<string>('');
  const [alreadyLaunched, setAlreadyLaunched] = useState<boolean>(false);
  // const storage = new Storage();

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

        {/* <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: true,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
