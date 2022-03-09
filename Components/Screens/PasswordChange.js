import React from 'react';
import { SafeAreaView, View,Text,TextInput,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
const PasswordChange = ({navigation}) => {
  return(
      <>
      <SafeAreaView style={styles.container}>
      <TouchableOpacity   style={{ marginTop: 30, marginLeft: 2 }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-backspace"  color='#00BFFF' size={30} style={{ padding: 5 }}></Icon>
                </TouchableOpacity> 
          <View>
          <View  style={styles.img}>
                        <Image source={require('../Img/Confirmation.png')}></Image>
                        <Avatar size={"xlarge"} source={require('../Img/Confirmation.png')} ></Avatar>
                    </View>
                    <View style={styles.bottom}>
                            <View style={styles.inputBoX}>
                                <Icon name='lock' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                                <TextInput style={{ width: '100%' }} placeholder="Create Password" />
                                <Icons name='eye-off' size={22} color='#00BFFF' style={{ margin: 10 }}></Icons>
                            </View>
                            <View style={styles.inputBoX}>
                                <Icon name='lock' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                                <TextInput style={{ width: '100%' }} placeholder="Confirm Password" />
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('DonePassword')} style={styles.button}>
                    <Text style={styles.buttonTitle}>
                     CONTIUNE
                    </Text>
                </TouchableOpacity>
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
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBoX: {
        backgroundColor: '#D5DBE3',
        borderRadius: 10,
        flexDirection: 'row',
        margin: 10,
        width:'80%'

    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'center',
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
    buttonTitle: {
        color: "#FFF",
        fontWeight: 'bold',

    },
  });
export default PasswordChange;