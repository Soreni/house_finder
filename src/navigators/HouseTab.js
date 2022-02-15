import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//icons
import { MaterialIcons } from '@expo/vector-icons';

//import screens
import AddHome from '../screens/AddHome';
import ProvideSupport from '../screens/ProvideSupport';
import HomeDetails from '../screens/HomeDetails';
import HomeList from '../screens/HomeList';
import HouseLocation from '../screens/HouseLocation';
import UserProfile from '../screens/UserProfile';
import Feedback from '../screens/Feedback';

//colors
import { Colors } from '../components/styles';
const { primary, tertiary, brand } = Colors;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HouseNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen name="HomeList" component={HomeList} options={{ headerShown: false }} />
      <Stack.Screen name="HomeDetails" component={HomeDetails} />
      <Stack.Screen name="HouseLocation" component={HouseLocation} />
      <Stack.Screen name="AddHome" component={AddHome} />
    </Stack.Navigator>
  );
}

function SupportNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProvideSupport" component={ProvideSupport} />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
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
          } else if (route.name == 'Support') {
            iconName = 'support-agent';
          } else {
            iconName = 'account-circle';
          }

          return <MaterialIcons name={iconName} size={25} color={tertiary} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HouseNavigator} />
      <Tab.Screen name="Support" component={SupportNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
