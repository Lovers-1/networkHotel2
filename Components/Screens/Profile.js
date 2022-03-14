import React,{useState,useEffect} from 'react';
import { View ,ToastAndroid, Text,StyleSheet,SafeAreaView,   TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import * as ImagePicker from 'expo-image-picker';

import { auth ,db } from './firebase';
const Profile  =({navigation}) =>{

  const userId = auth.currentUser.uid;
   
  const [name , setName] = useState();
  const [surname , setSurname] = useState();
  const [phoneNumber , setPhoneNumber] = useState();
  const [email , setemail] = useState();
  const [url,setUrl] = useState();

  useEffect(()=>{
      db.ref('/user/' + userId).on("value",value=>{

        console.log(value.val())

        // setUser( {
        //       ...snapshot.val(),
        //   })
        setName(value.val().name)
        setSurname(value.val().surname)
        setemail(value.val().email)
        setPhoneNumber(value.val().phoneNumber)
  setUrl(value.val().url)


      })
  },[]);


  //
  const signOut =() =>{
    auth.signOut();
    navigation.navigate('SignIn')
    ToastAndroid.show("Succussfully loged out ", ToastAndroid.SHORT)
  }
    return(
        <>
        <SafeAreaView style ={styles.container}>
            <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              {/* <Text> {url}</Text> */}
            <Avatar size={80}  source={{ uri: url }} rounded></Avatar>
 <View style={{marginLeft: 20}}>
 <Text style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]} >
         {name}
     </Text>
     <Text style={styles.caption}>
        {surname}
     </Text>

     </View>
     </View>
     </View>

     <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icons name="person" color="#00BFFF" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{name}, {surname}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#00BFFF" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{phoneNumber}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#00BFFF" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{email}</Text>
        </View>
      </View>

      
      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Text style={{color:"#00BFFF"}}>
                8</Text>
            <Text style={{color:"#00BFFF"}}>Number of fovarite </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={{color:"#00BFFF"}}>12</Text>
            <Text style={{color:"#00BFFF"}} >Number of bookings</Text>
          </View>
      </View>
      <View  style={styles.button} >
        <TouchableOpacity onPress={ ()=>navigation.navigate('UpdateProfile')}>
            <Text style={{color:"#fff"}}>
                Edit profile 
            </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={signOut}>
            <Text style={{color:"#fff"}} >
                Log Out 
            </Text>
        </TouchableOpacity>
        
        </SafeAreaView>
        {/* <SafeAreaView style={styles.box}>
            
             
        <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                <TouchableOpacity>
                    
          
          <Avatar size={'large'} source={require('../Img/Ellipse.png')}></Avatar>
          </TouchableOpacity>
          
</View>
            <View style={styles.content}> 
                <View style={styles.subConent}>  
            <Text style={styles.prH}>
               Name 
            </Text>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <Text>
                Lovers
                
            </Text>
            <Icon name='edit' size={22} color='#00BFFF' style={{ margin: 0,marginRight:10 }}></Icon>
            </View>
            </View>

            <View style={styles.subConent}>
            <Text style={styles.prH}>
               Surname 
            </Text>
            <View style={styles.ico}>
            <Text>
            Maluleke
            </Text>
            <Icon name='edit' size={22} color='#00BFFF' style={{ margin: 0,marginRight:10 }}></Icon>
            </View>
</View>
            <View style={styles.subConent}>
            <Text style={styles.prH}>
               Phone No
            </Text>
            <View style={styles.ico}>
            <Text>
                067 723 2342
            </Text>
            <Icon name='edit' size={22} color='#00BFFF' style={{ margin: 0,marginRight:10 }}></Icon>
            </View>
            </View>
            <View style={styles.subConent}>
            <Text style={styles.prH}>
               Email Adderss 
            </Text>
            <View style={styles.ico}>
            <Text>
            malulelelovers@gmail.com
            </Text>
            <Icon name='edit' size={22} color='#00BFFF' style={{ margin: 0,marginRight:10 }}></Icon>
            </View>
            </View>
            </View>
            <View style={styles.button}>
                                <TouchableOpacity onPress={ ()=>navigation.navigate('DonePassword')}>
                                    <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 20 }}>
                                        Update
                                    </Text>
                                </TouchableOpacity>
                            </View>
        </View>
        </SafeAreaView> */}
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        // alignItems: 'center',
        justifyContent: 'center',
    },
    ico:{
        flexDirection:'row',
        justifyContent:"space-between" ,
        // width: '100%',
    },
    button: {
        backgroundColor: "#00BFFF",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '6%',
        marginLeft:35,
        marginTop:18
    },
    content:
    {
        margin:15,
    },
    box:{
        flex:1,
        backgroundColor:'#fff'
    },
    img:{
        width:"50%",
        borderRadius:150,
        height:'35%',
        backgroundColor:'#00BFFF'
    },
    head:
    {
        marginTop:40,
        fontSize:25,
        color:'#00BFFF',
        fontWeight:'bold',
        margin:5,


    },
    prH:{
      
        color:'#00BFFF',
        fontSize:22,
        fontWeight:'bold',
        marginTop:2,
    },
    subConent:{
        borderBottomWidth:1,
        width: '80%',
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
});
export default Profile;