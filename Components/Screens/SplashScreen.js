import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View,Text,SafeAreaView, StyleSheet,Image,ImageBackground } from 'react-native';

const SplashScreen =({navigation})=>{

    setTimeout(()=>{
        navigation.replace('SplashScreen1');
      }, 3000);
    return(<>
   <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../Img/rent.png')}>
            <View style={styles.container}>
              <Text style={{color:'#00BFFF', fontSize:20, marginTop :10, fontWeight:'bold'}}>
          NETWORK HOTEL
          </Text>
          </View>
      </ImageBackground>
    
      <StatusBar
            backgroundColor="#00BFFF"
            barStyle="light-content"
            />
    </SafeAreaView>
    </>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
        flex: 1,
      },
      title: {
        color: 'white',
        padding: 20,
      },  
      align: {
        justifyContent: 'center',
        alignItems: 'center',
      }
  });
  export default SplashScreen;