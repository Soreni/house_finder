import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//credentials
import { CredentialContext } from '../components/CredentialContext';

//import custom tabs
import TabNavigator from './HouseTab';

//screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import AuthNavigation from './AuthNavigation';

//colors
import { Colors } from '../components/styles';
const { primary, tertiary } = Colors;

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: Colors.blueGrey,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            padding: 20,
          },
        }}
        initialRouteName="HomeList"
      >
        <>
          <Stack.Screen
            options={{ headerTintColor: primary, headerLeft: null }}
            name="MainTab"
            component={TabNavigator}
          />

          {/* <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} /> */}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
