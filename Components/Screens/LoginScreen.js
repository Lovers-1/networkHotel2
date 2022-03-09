import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
const LoginScreen =({navigation})=>{
    return(
        <>
        <SafeAreaView style={styles.container}>
<View>
            <View style={styles.img}>
            
                <Avatar  size={'xlarge'} source={require('../Img/Login.png')}></Avatar>
                </View  >
                <ScrollView >
                    <Text style={{ fontSize: 30, color: '#00BFFF', fontWeight: 'bold', marginLeft: 10,marginTop:30}} >
                        Login
                    </Text>
                    <View style = {styles.con} >
                      
                    <View style={styles.inputBoX}>
                                <Icon name='email' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                                <TextInput  placeholder="ENTER YOUR EMAIL" />
                            </View>
                            <View style={styles.inputBoX}>
                                <Icon name='lock' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                                <TextInput  style={{width:'78%'}} placeholder="PROVIDE YOUR PASSWORD" />
                                <Icons name='eye-off' size={22} color='#00BFFF' style={{ margin: 10 ,marginRight:30}}></Icons>
                            </View>
                        
                   
                    </View>

                        <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')} >
                        <Text style={{marginLeft:296, color: '#00BFFF',fontSize:15}}>
                            forget password
                        </Text>
                    </TouchableOpacity>
                    </ScrollView>
                    <View style={styles.button}>
                                <TouchableOpacity onPress={ ()=>navigation.navigate('TabScreen')}>
                                    <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 20 }}>
                                        Sign in 
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ alignItems: 'center', justifyContent: 'center',marginTop:30}}>
                        <Text style={{ fontSize:20,fontWeight:'bold',color: '#00BFFF' }} >
                            Sign up 
                        </Text>
                    </TouchableOpacity>
                    
                </View>

            
        {/* <View >
            <Image  style={{height:'40%', width:300, marginTop:35, marginLeft:60}}source={require('../Img/Login.png')}/>
            <Text style={{ fontSize: 30, color: '#00BFFF', fontWeight: 'bold', marginLeft: 15 }}>
                    Login
            </Text>

            <View style={{ margin: 5,marginTop:20, alignItems: 'center', justifyContent: 'center',marginLeft: 40 }}>
                    <View style={{ height: 40, borderRadius: 10, backgroundColor: '#D5DBE3', width: '80%', flexDirection: 'row', }}>
                        <Icon name='email' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                        <TextInput style={{ width: '100%' }} placeholder="ENTER YOUR EMAIL" />
                    </View>
                    <View style={{ height: 40, borderRadius: 10, backgroundColor: '#D5DBE3', width: '80%', flexDirection: 'row', marginTop: 20 }}>
                        <Icon name='lock' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                        <TextInput style={{ width: '100%' }} placeholder="PROVIDE YOUR PASSWORD" />
                        <Icons name='eye-off' size={22} color='#00BFFF' style={{ margin: 10 }}></Icons>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')} style={{flexDirection: 'row', width:"90%", marginTop:20}}>
                        <Text style={{marginLeft:200, color: '#00BFFF'}}>
                            forget password
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={ ()=>navigation.navigate('TabScreen')} style={{ width: '70%',marginTop:40, backgroundColor: '#00BFFF', borderRadius: 8, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#ffff' }} >
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ alignItems: 'center', justifyContent: 'center',marginTop:30}}>
                        <Text style={{ fontSize:20,color: '#00BFFF' }} >
                            Sign up 
                        </Text>
                    </TouchableOpacity>
                    </View>

        </View> */}
        <StatusBar
            backgroundColor="#00BFFF"
            barStyle="light-content"
            />
        </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    con:{
         flex: 1,
        // backgroundColor: '#fff',
    alignItems: 'center',
      justifyContent: 'center',

    },
    inputBoX: {
        backgroundColor: '#D5DBE3',
        borderRadius: 10,
        width:'90%',
        flexDirection: 'row',
        margin: 15,

    },
    button: {
        backgroundColor: "#00BFFF",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '8%',
        marginLeft:120,
        marginTop:8
    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',   
        marginTop:30,    
    },
  });
export default LoginScreen; 