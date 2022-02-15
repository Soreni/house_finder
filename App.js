'use strict';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import OfflineNotice from './src/components/OfflineNotice';
import AuthContext from './src/auth/context';

//app loading
import AppLoading from 'expo-app-loading';
//react navigation stack
import RootStack from './src/navigators/RootStack';
import AuthNavigation from './src/navigators/AuthNavigation';

//import store
import { store } from './src/redux/store';

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState('');
  const [user, setUser] = useState();

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <Provider store={store}>
          <OfflineNotice />
          {user ? <RootStack /> : <AuthNavigation />}
          <Toast />
        </Provider>
      </AuthContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
