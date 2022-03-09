import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const Splash = ({ navigation }) => {

    return (
        <>
            <SafeAreaView styles={styles.container}>
               <View styles={styles.container}>
                   <Text>
                       lovers maluleke
                   </Text>
               </View>
               
               <View>
                 <Text>
                       lovers knbnkj maluleke
                   </Text>
               </View>
                <StatusBar
            backgroundColor="#00BFFF"
            // barStyle="light-content"
            />
            </SafeAreaView>
        </>

    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Splash;