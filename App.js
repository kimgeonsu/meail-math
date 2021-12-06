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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#F6BB43',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#292929',
          borderRadius: '20',
        }
        })}
    >
      <Tab.Screen 
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "홈",
          tabBarIcon:(({color}) => <Icon name="home" color={color} size={26} />)
        }}
      />
      <Tab.Screen 
        name="Ranking"
        
        component={RankingPage}
        options={{
          tabBarLabel: "랭킹",
          tabBarIcon:(({color}) => <Icon name="emoji-events" color={color} size={26} />)
        }}  
      />
    </Tab.Navigator>
  );
}

export default function App() {

  const token = async() => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      let  token = JSON.parse(userInfo);
      if (token.token) {
        return true;
      } else {
        return false;
      }
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="register" component={RegisterPage} />
        <Stack.Screen name="homeTab" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
});
