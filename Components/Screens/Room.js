import React,{useState,useEffect} from 'react';
import { StyleSheet, Text,SafeAreaView,Image,View,TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

//


const Room = ({ route,navigation}) => {


    

    return (
   <>
<SafeAreaView style={styles.container}>

<Image source={require('../Img/hotel1.jpg')} style={{width:'90%',borderBottomLeftRadius:10,borderBottomRightRadius:10,height:'20%',margin:10}}></Image>

        <View style={{width:'90%'}}>      
    <Text style={{fontWeight:'bold'}}>
        ROOM NUMBER 1 
    </Text>
    </View> 
    <View style={styles.info}>
<Text style={{fontWeight:'bold', color:'#00BFFF'}}>
    84 Schoeman st
</Text>
<Text style={{fontWeight:'bold', color:'#00BFFF'}}>
    
    Polokwane, 0699
</Text>
    </View>
<View style={styles.info}>
<View style={{width:"95%", margin:5}}>
    <Text>
        Details
    </Text>
    <Text>
        1 room - 2 adults- 0 childern
    </Text>
    <Text>
        R 1200.00
    </Text>
    <Text>
        Include
    </Text>
    <View style={{flexDirection:'row'}}>
    <View style={{width:70,height:57,backgroundColor:'#00BFFF',justifyContent: 'center', marginStart:5,
        alignItems: 'center'}}>
       <Icons  name='eye-off' size={25} color='#fff' />
    </View>
    <View style={{width:70,height:57,backgroundColor:'#00BFFF',marginStart:5,justifyContent: 'center',
        alignItems: 'center'}}>
       <Icons  name='sound' size={25} color='#fff' />
    </View>
    <View style={{width:70,height:57,backgroundColor:'#00BFFF',marginStart:5,justifyContent: 'center',
        alignItems: 'center', }}>
       <Icons  name='tv' size={25} color='#fff' />
    </View>
    <View style={{width:70,height:57,backgroundColor:'#00BFFF',marginStart:5, justifyContent: 'center',
        alignItems: 'center', }}>
       <Icons  name='wifi' size={25} color='#fff' />
    </View>
    
    </View>
</View>
</View>
<View  style={{width:'90%',flexDirection:'row',justifyContent:'space-between', marginTop:5}} >
    <View >
<Avatar size="xlarge" source={require('../Img/inside.png')}></Avatar>
</View>
<Avatar size="xlarge" source={require('../Img/inside1.png')}></Avatar>
</View>
<TouchableOpacity style={styles.button}  onPress={ ()=>navigation.navigate('Payment')}>
    <Text style={{color:'#fff',fontWeight:'bold'}}>
        BOOK NOW 
    </Text>
</TouchableOpacity>

    </SafeAreaView>   
   </> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       // justifyContent: 'center',
        alignItems: 'center'
    },
    info:{
        width:'90%',
        borderWidth:2 ,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        borderColor:'#00BFFF',
    },
    button: {
        elevation: 3,
        width: '80%',
        backgroundColor: "#00BFFF",
        color: "#fff",
        height: 35,
        borderRadius:10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default Room;