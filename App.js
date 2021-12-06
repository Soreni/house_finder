import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';

//app loading 
import AppLoading from 'expo-app-loading';
//react navigation stack
import RootStack from './src/navigators/RootStack';
//import store
import {store} from './src/redux/store';



export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState('');



  return (
    <>
    <Provider store={store}>
    <RootStack />
    </Provider>
  


</>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
