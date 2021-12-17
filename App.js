import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'

import LoginPage from './components/login/login-page';
import RegisterPage from './components/login/register-page';
import HomePage from './components/home/home-page';
import RankingPage from './components/ranking/ranking-page';
import RoomPage from './components/home/room';
import FriendsPage from './components/fiends/friendsPage';
import CategoryPage from './components/home/selectCategory';
import SplashScreen from './components/login/splash-page';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#00cccc',
        tabBarInactiveTintColor: 'lightgray',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: "transparent"
        }
        })}
    >
      <Tab.Screen 
        name="Ranking"
        
        component={RankingPage}
        options={{
          tabBarLabel: "랭킹",
          tabBarIcon:(({color}) => <Icon name="emoji-events" color={color} size={26} />)
        }}  
      />
      <Tab.Screen 
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "홈",
          tabBarIcon:(({color}) => <Icon name="home" color={color} size={26} />),
          
        }}
      />
      
      <Tab.Screen 
        name="Friends"
        
        component={FriendsPage}
        options={{
          tabBarLabel: "친구",
          tabBarIcon:(({color}) => <Icon name="groups" color={color} size={26} />)
        }}  
      />
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="splashPafe" component={SplashScreen} />
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="register" component={RegisterPage} />
        <Stack.Screen name="homeTab" component={HomeTabs} options={{gestureEnalbled: false}} />
        <Stack.Screen name="room" component={RoomPage} />
        <Stack.Screen name="categoryPage" component={CategoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
