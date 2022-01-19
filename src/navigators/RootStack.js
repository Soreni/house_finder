import React from 'react'
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
import Main from '../screens/Main';


//colors
import {Colors} from '../components/styles';
const {primary, tertiary} = Colors;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function RootStack() {
  return (   
        <NavigationContainer>
        <Stack.Navigator 
        screenOptions= {{
            headerStyle:{
               backgroundColor:'transparent'
            },
            headerTintColor: tertiary,
            headerTransparent: true,
            headerTitle: '',
            headerLeftContainerStyle: {
                padding:20
            }
        }}
        initialRouteName='Login'
        >
          
          <> 
          <Stack.Screen options={{ headerTintColor: primary,headerLeft: null }} name="MainTab" component={TabNavigator} /> 
          
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
       
          </>
         
        
              
        </Stack.Navigator>
        </NavigationContainer>    
  );
}

export default RootStack;