import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
//
import { StatusBar } from 'expo-status-bar';
//

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './Homescreen';
import Profile from './Profile';
import History from './History';
import Love from './Love';
//const

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

//
const TabScreen = () => {
    return (
        <>
          <StatusBar
            backgroundColor="#00BFFF"
            barStyle="light-content"
            />
            <Tab.Navigator>
            <Tab.Screen name ={"HomeScreen"} component={Homescreen}      options={{
          tabBarLabel: 'Home',
          tabBarColor: '#00BFFF',
          headerShown :false,
          tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={24} />
          ),
        }} ></Tab.Screen>
<Tab.Screen name ={"History"} component={History}      options={{
          tabBarLabel: 'History',
          tabBarColor: '#00BFFF',
          //  headerShown :false,
          tabBarIcon: ({ color }) => (
          <Icons name="history" color={color} size={24} />
          ),
        }} ></Tab.Screen>

<Tab.Screen name ={"Favorite"} component={Love}      options={{
          tabBarLabel: 'favorite',
          tabBarColor: '#00BFFF',
          // headerShown :false,
          tabBarIcon: ({ color }) => (
          <IconM name="favorite" color={color} size={24} />
          ),
        }} ></Tab.Screen>
        <Tab.Screen name ={"Profile"} component={Profile}      options={{
          tabBarLabel: 'Profile',
          // headerShown :false,
          tabBarColor: '#00BFFF',
          tabBarIcon: ({ color }) => (
          <Icon name="person" color={color} size={24} />
          ),
        }} ></Tab.Screen>
        
         </Tab.Navigator>
        </>
    )
}
export default TabScreen;