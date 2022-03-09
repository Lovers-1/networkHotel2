import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
//navigation 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Components/Screens/LoginScreen';
import SignUp from './Components/Screens/SignUp';
import ForgetPassword from './Components/Screens/ForgetPassword';
import ForgetPasswordPin from './Components/Screens/ForgetPasswordPin';
import Homescreen from './Components/Screens/Homescreen';
import TabScreen from './Components/Screens/TabScreen';
import DonePassword from './Components/Screens/DonePassword';
import PasswordChange from './Components/Screens/PasswordChange';
import SplashScreen from './Components/Screens/SplashScreen';
import SplashScreen1 from './Components/Screens/SplashScreen1';
import Notification from './Components/Screens/Notification';
import Booking from './Components/Screens/Booking';
import GetStart from './Components/Screens/GetStart';
import SignIn from './Components/Screens/SignIn';
import Room from './Components/Screens/Room';
import UpdateProfile from './Components/Screens/UpdateProfile';
import Payment from './Components/Screens/Payment';
import AboutNotif from './Components/Screens/AboutNotif';
import PaymentSuc from './Components/Screens/PaymentSuc';

import Avaliable from './Components/Screens/Avaliable';
import Map from './Components/Screens/map';
import Comfirm from './Components/Screens/Comfirm';
const Stake = createNativeStackNavigator();
export default function App() {
  return (
// 

    <NavigationContainer>
        <StatusBar
            backgroundColor="#00BFFF"
            barStyle="light-content"
            />
      <Stake.Navigator>
      
      
    <Stake.Screen name={"GetStart"} component ={GetStart} options ={{headerShown:false}} ></Stake.Screen>
      <Stake.Screen name ='Payment' component={Payment} ></Stake.Screen>
<Stake.Screen name={ "SignIn"} component ={SignIn} options={{headerShown:false}}></Stake.Screen>
{/* <Stake.Screen name={"Map"} component={Map}> </Stake.Screen> */}
        <Stake.Screen name="SplashScreen1" component={SplashScreen1} options={{ headerShown: false }}>
        </Stake.Screen>
        <Stake.Screen name="SplashScreen"
          component={SplashScreen} options={{ headerShown: false }}></Stake.Screen>
        <Stake.Screen name="LoginScreen"
          component={LoginScreen} options={{ headerShown: false }}></Stake.Screen>
        <Stake.Screen name="TabScreen"
          component={TabScreen} options={{ headerShown: false }}></Stake.Screen>
        <Stake.Screen name="SignUp"
          component={SignUp} options={{ headerShown: false }} ></Stake.Screen>
        <Stake.Screen name="ForgetPassword"
          component={ForgetPassword} options={{ headerShown: false }}></Stake.Screen>
        <Stake.Screen name="ForgetPasswordPin"
          component={ForgetPasswordPin} options={{ headerShown: false }}></Stake.Screen>
        <Stake.Screen name="Notification" options={{ headerShown: false }}
          component={Notification} ></Stake.Screen>
        <Stake.Screen name="DonePassword"
          component={DonePassword} options={{ headerShown: false }}></Stake.Screen>
        <Stake.Screen name="PasswordChange"
          component={PasswordChange} options={{ headerShown: false }}></Stake.Screen>
     
      <Stake.Screen name="Room"
          component={Room}  ></Stake.Screen>
          <Stake.Screen name="Confirm" component={Comfirm}/>
          <Stake.Screen name="Booking"
          component={Booking} options={{ headerShown: false }} ></Stake.Screen>
          <Stake.Screen name = 'UpdateProfile' component={UpdateProfile}></Stake.Screen>
        
          <Stake.Screen name="AboutNotif" component={AboutNotif} options={{ headerShown: false }} ></Stake.Screen>
          <Stake.Screen name="PaymentSuc"  component={PaymentSuc}  options={{ headerShown: false }} ></Stake.Screen>
          <Stake.Screen  name="Avaliable" component={Avaliable} options={{headerShown:false}}></Stake.Screen>
      </Stake.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
