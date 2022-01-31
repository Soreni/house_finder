import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//icons
import { MaterialIcons } from '@expo/vector-icons';

//import screens
import AddHome from '../screens/AddHome';
import SearchHome from '../screens/SearchHome';
import HomeDetails from '../screens/HomeDetails';
import HomeList from '../screens/HomeList';
import Profile from '../screens/Profile';
import Feedback from '../screens/Feedback';

//colors
import { Colors } from '../components/styles';
const { primary, tertiary } = Colors;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function stackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeList">
      <Stack.Screen name="HomeList" component={HomeList} />
      <Stack.Screen name="HomeDetails" component={HomeDetails} />
      <Stack.Screen name="AddHome" component={AddHome} />
    </Stack.Navigator>
  );
}

function stackSearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchHome} />
    </Stack.Navigator>
  );
}

function profileStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name == 'Home') {
            iconName = 'home';
          } else if (route.name == 'Search') {
            iconName = 'search';
          } else {
            iconName = 'account-circle';
          }

          return <MaterialIcons name={iconName} size={24} color={tertiary} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={stackNavigator} />
      <Tab.Screen name="Search" component={stackSearchNavigator} />
      <Tab.Screen name="Profile" component={profileStackNavigator} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
