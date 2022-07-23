import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/screens/RootStackParamList';
import { SCREEN_A } from './src/utils/constants/screens';

// Screens
import ScreenA from './src/screens/screenA';
import { Button } from 'react-native';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
