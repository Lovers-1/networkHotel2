import React from 'react';
import { View, Text, StyleSheet, Button , TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { StatusBar } from 'expo-status-bar';
const GetStart = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
            <StatusBar
                    backgroundColor="#00BFFF"
                    barStyle="dark-content"
                />
                <Avatar size={'xlarge'} source={require('../Img/splash.jpeg')}></Avatar>
                <Text style={styles.title}>
                    STAY AT DREAMLY PLACES
                </Text>
                <Text style={styles.subTL}>
                 WELLCOME TO THE NETWORK HOTEL APP, 
                GET TO EXPORE MORE 
                 WOW SUCH A LOVELY PLACE TO SYTAY WHEN IN WILLDERNESS.
                 ABOUT THE AFFORDABLE HOTEL IN EVERY COUNTY OF THE COUTRY 
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp') } style={styles.button}>
                    <Text style={styles.buttonTitle}>
                    GET STARTED
                    </Text>
                </TouchableOpacity>
                <View style={styles.sub}>
                <Text style={styles.subT}>
                    Already have an account ? 
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SplashScreen1')}>
                <Text style={styles.subTiltle}>
                   Sign In 
                </Text>
                </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

// styles 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color:"#00BFFF",
        margin:5,
        padding:10,
        fontSize:20,
        fontWeight:'bold',
        elevation:3,
    },
    subTL:{
        color:"#D5DBE3",
        fontWeight:'600',
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    button:{
        elevation:3,
        width:'80%',
        backgroundColor:"#00BFFF",
        color:"#fff",
        height:35,
        margin:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTitle:{
        color:"#FFF",
        fontWeight:'bold',

    },  subTiltle: {
        color: "#00BFFF",
        fontWeight: '600',
        margin: 5,
        padding: 5,
    },
    subT: {
        color: "#000",
        fontWeight: '600',
        margin: 5,
        padding: 5,
    },
    sub:{
        flexDirection: 'row',
    }
});
export default GetStart;