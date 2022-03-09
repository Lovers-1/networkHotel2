import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ImageBackground, View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
const SplashScreen1 = ({ navigation }) => {


    setTimeout(() => {
        navigation.replace('SignIn');
    }, 3000);
    return (


        <>
            <SafeAreaView style={styles.container}>

                <View >
                    <Avatar rounded size={'xlarge'} source={require('../Img/love.png')}></Avatar>
                    

                </View>
                <Text style={{marginBottom:80,marginTop:10,color:'#00BFFF', fontSize:28, fontWeight:'bold',borderBottomWidth:4,borderColor:'#00BFFF'}}>
                    NETWORK HOTEL
                </Text>
                <StatusBar
                    backgroundColor="#00BFFF"
                    barStyle="dark-content"
                />
                  <ActivityIndicator size="large"
                    color="#00Bfff" />
            </SafeAreaView>

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
    wrapper: {
        flex: 1,
    },

});
export default SplashScreen1;