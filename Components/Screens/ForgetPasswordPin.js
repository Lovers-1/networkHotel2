import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity,Image,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';
const ForgetPasswordPin = ({ navigation }) => {
    return (
        <>
            <SafeAreaView  style={styles.container}>
                <TouchableOpacity  style={{ marginLeft: 2,marginTop:20 }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-backspace" color='#00BFFF' size={30} style={{ padding: 5 }}></Icon>
                </TouchableOpacity>
                <View  >
                <View  style={styles.img}>
                        {/* <Image source={require('../Img/Confirm.png')}></Image> */}
                        <Avatar size={'xlarge'} source={require('../Img/Confirm.png')}></Avatar>
                        
                    </View>
                    <View style={styles.container2}>
                    <View style={styles.bottom}> 
                    <View style={{  flexDirection: 'row',justifyContent:'center' }}>
                        <TextInput style={{ width: '15%',backgroundColor: '#D5DBE3',height: 50,margin:20, borderRadius: 10 }} />
                        <TextInput style={{ width: '15%',backgroundColor: '#D5DBE3',height: 50,margin:20, borderRadius: 10 }}/>
                        <TextInput style={{ width: '15%',backgroundColor: '#D5DBE3',height: 50,margin:20, borderRadius: 10 }} />
                        <TextInput style={{ width: '15%',backgroundColor: '#D5DBE3',height: 50,margin:20, borderRadius: 10 }}/>
                    </View>
                    
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordChange')} >
                        <Text style={styles.buttonTitle}>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                   
                    </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //  alignItems: 'center',
        // justifyContent: 'center',
    },
    buttonTitle: {
        color: "#FFF",
        fontWeight: 'bold',

    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop:40,
        justifyContent: 'center',
    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: '4%',
    },
    subT: {
        color: "#000",
        fontWeight: '600',
        margin: 5,
        padding: 5,
    },
    button: {
        elevation: 3,
        marginTop:50,
        width: '80%',
        backgroundColor: "#00BFFF",
        color: "#fff",
        height: 35,
        borderRadius:10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
  
        
    bottom: {
        alignItems: 'center',
        justifyContent: 'center',
    },


})
export default ForgetPasswordPin; 