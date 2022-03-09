import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity,ScrollView } from 'react-native';
const Popular = () => {
   return(
       <>
         <View  style={{height:130,width:130}}>
                          <View style={{flex:2}}>
                                <Image  source={props.imageUrl} style={{flex:1,height:null,width:null,resizeMode:'cover'}}></Image>  
                               
                          </View>
                          <View style={{flex:1}}>
                                <Text style={{color:'black',fontWeight:'bold'}}>
                                   {props.name}
                                </Text>

                          </View>
                       </View>
       </>

   ) 
}

export default Popular;