import React, { useState } from 'react';

import Users from './Users';
import { auth } from './firebase';
import moment from 'moment';
//
import { ListItem } from 'react-native-elements';
import { View, ToastAndroid, Text, StyleSheet, SafeAreaView, TextInput, Image, Picker, TouchableOpacity, ScrollView, Pressable, Alert } from 'react-native';
import Ico from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import DatePicker from "react-native-datepicker";
import Icon from 'react-native-vector-icons/MaterialIcons';
//
import Feather from 'react-native-vector-icons/Feather'

//
import  {db} from './firebase';
//
import { Formik } from "formik";
import * as yup from "yup";



const Booking = ({route,navigation }) => {

///
const [checkin,setCheckin]=useState()
const [checkout,setCheckout]=useState()
    ///
    const{postId,postName,postUrl} = route.params;
    const id = postId;
    const Hotelname = postName;
    const imageUrl=postUrl;
    console.log(Hotelname);
    console.log(id);
    console.log(imageUrl);

    
    const [user, setuser] = useState(Users.users);
    const [room, setRoom] = useState(Users.rooms);
    const [sdate, setDate] = useState()
    const [end,setEnd] =useState();
    //
    const [audultPlus, setAudultPlus] = useState(0)
    const [childPlus, setChildPlus] = useState(0)
    const [roomPlus, setRoomPlus] = useState(0)
    //
    const [beds, setBeds] = useState("Double Bed");
    const [days,setDays] = useState()
    const userId = auth.currentUser.uid;

    // const AddUsers=( name ,surname , location ,age , gender)=>{
    //     setUsers([...users,{
    //       id:users.length,
    //       n: name,
    //       s:surname,
    //       l:location,
    //       a:age,
    //       g:gender,
    //     }])
    //   }
    const CalcDate = ()=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        var a = moment(new Date(checkin))
        var b = moment(new Date(checkout))
        
        setDays(b.diff(a,'days'))
        {
            moment(checkin).isBefore(checkout)?(
              <Text></Text>
            ):(
           
            Alert.alert('checkout must not be before checkin')
            )
          }

          {
            moment(checkin).isSame(checkout)?(
              Alert.alert('date must not be the same')
             
            ):(
             <Text>  </Text>
            )
          }
        if(num == " ")
        {
            Alert.alert(';pkoipji')
        }
        else{
        console.log('num',b.diff(a,'days'))
        // navigation.navigate("Avaliable", {postId:postId , days:b.diff(a,'days'), num:num,nRoom:nRoom,breakfast:breakfast})
        }
    }
    const Book = () => {
        db.ref('/Booking').set({
          
         userId,
         
        num,
          nRoom,
      breakfast,
        })
        ToastAndroid.show(" Rooms to meet ynour fli  ", ToastAndroid.SHORT)
        navigation.navigate("Avaliable");
    }
    const updateUser = (beds) => {
        setBeds(beds)
    }
    //
    const [num, setNum]= useState(1);
    const [nRoom ,  setNroom] = useState(1);
    const [breakfast,setBreakfast] =useState('Yes');
    const [datetoday,setDatetoday]=useState(new Date())
    const numGuest = (num) => {
        setNum(num)
    }
    const numRoom = (nRoom) => {
        setNroom(nRoom)
    }

    const breakFast = (breakfast) =>(
        setBreakfast(breakfast)
    )
 console.log(auth.currentUser.uid)
    const ReviewSchem = yup.object({
        roomPlus: yup.number().required().min(0).max(4),
        audultPlus:yup.number().required().min(0).max(6),
        childPlus:yup.number().max(10).min(0),  
        
    });
   
    //
    const setToastMsg =msg=>{
        ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
    }


    //
    var a =moment(checkout)
      var b =moment(checkin)
      var given=moment("2022-01-15","YYYY-MM-DD")
     var diff=0
        
        var morr =moment().add(1,'days').calendar()

    return (
        <>
            <SafeAreaView style={styles.container}>

                <View style={{ margin: 10 }}>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="keyboard-backspace" color='#00BFFF' size={22} ></Icon>
                        </TouchableOpacity>
                        <Text style={{ color: '#00BFFF', fontWeight: 'bold', fontSize: 20, marginLeft: 120 }}>Booking</Text>
                        {/* <Icon name="search" color='#00BFFF' size={25} ></Icon> */}
                    </View>
                    <Text style={{ color: 'gray', marginTop: 10 }}>
                      {Hotelname}
                    </Text>

                    <Image source={{uri: imageUrl}} style={{ width: '100%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, height: 150, marginTop: 15 }}></Image>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ color: 'gray'}} >Check In</Text>
                        <Text style={{ color: 'gray'}}> Check Out</Text>
                    </View>

                    <Formik initialValues={{ roomPlus:"", audultPlus: "",childPlus:"", }}
                    validationSchema={ReviewSchem}
                    onSubmit={(values)=>
                        CalcDate(values.checkin,values.checkout)
                       }>
                    {(props) => (
                        <>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                        <DatePicker
                            style={{ width: 165 }}
                            date={checkin}
                            mode="date"
                            // placeholder="check in"
                            minDate={datetoday}
                            // maxDate="0"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    backgroundColor: '#fff',
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { setCheckin(date); console.log(date); }}
                        />

                        <DatePicker
                            style={{ width: 165 }}
                            date={checkout}
                            mode="date"
                            // placeholder="check in"
                            minDate={datetoday}
                            // maxDate="0"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    backgroundColor: '#fff',
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { setCheckout(date); console.log(date); }}
                            
                        />


                    </View>
                    <ScrollView>

                    {
              moment(checkin).isBefore(checkout)?(
                <Text></Text>
              ):(
             
              //  setToastMsg('checkout must not be before checkin')
              <Text style={{color:'red'}}>checkout must not be before checkin</Text>
              )
            }
             {
              moment(checkin).isSame(checkout)?(
                <Text style={{color:'red'}}> date must not be the same</Text>
               
              ):(
               <Text>  </Text>
              )
            }

<Text style={{color:'green',fontWeight:'bold'}}>{diff=(a.diff(b,'days'))} DAYS</Text>


                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 8 }}>
                        <Text style={{ color: 'gray'}}>Number of Guest </Text>
                     
                    </View>
                    <View style={{ color: 'gray', marginTop: 5 }}>
                        <Picker selectedValue={num} onValueChange={numGuest}>
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3 " value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6 " value="6" />
                        </Picker>
                    </View>
  <Text  style={{color:'green',fontWeight:'bold'}}>{num} Guest</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 8 }}>
                        <Text style={{ color: 'gray'}}> Select Number of Rooms</Text>
                     
                    </View>
                    <View style={{ color: 'gray', marginTop: 0 }}>
                        <Picker selectedValue={nRoom} onValueChange={numRoom}>

                        <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3 " value="3" />
                            <Picker.Item label="4" value="4" />
                           
                        </Picker>
                    </View>
                    <Text  style={{color:'green',fontWeight:'bold'}}>{nRoom} Rooms</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 8 }}>
                        <Text style={{ color: 'gray'}}> Breakfast Add</Text>
                     
                    </View>
                    <View style={{ color: 'gray', marginTop: 5 }}>
                        <Picker selectedValue={breakfast} onValueChange={breakFast}>
                        <Picker.Item label="Yes" value="Yes" />
                            <Picker.Item label="No" value="No" />
                        </Picker>  
                    </View>
                   
                    {/* <TouchableOpacity onPress={()=>CalcDate()} style={styles.button} >
                            <Text style={{ color: '#fff' }}>
                                Check Now
                            </Text>
                        </TouchableOpacity> */}
                        {
                 diff<=0?(
                   <TouchableOpacity disabled={true}
                   onPress={()=>
                      navigation.navigate('Avaliable',{
                        postId:postId , days:a.diff(b,'days'), num:num,nRoom:nRoom,breakfast:breakfast
                        })} style={styles.button}>
                         
                          <Text style={{ color: 'red' }}>
                                Check Now
                            </Text>
                    
                   </TouchableOpacity>
            
                 ):(
                  <TouchableOpacity  style={styles.button}
                   onPress={()=>
                      navigation.navigate('Avaliable',{
                        postId:postId , days:diff, num:num,nRoom:nRoom,breakfast:breakfast,Hotelname:Hotelname,checkin:checkin,checkout:checkout
                        
                        })}>
                         
                     <Text  style={{ color: '#fff' }}>Check Now</Text>
                  
                   </TouchableOpacity>
                 )
              }
            
                        </ScrollView>
                    </>
                    )}

                </Formik>
                </View>

            </SafeAreaView>
        </>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    head: {
        alignItems: 'center',
        fontSize: 25,
        color: '#00BFFF',
        fontWeight: 'bold',
        // marginLeft: 95,
        // marginTop: 5,
    },
    buttonTitle: {
        color: "#FFF",
        fontWeight: 'bold',

    },
    inside: {
        width: '100%',
        borderBottomWidth: 1,
        margin: 5
    },
    inputBox: {
        flexDirection: 'row',
        backgroundColor: '#D5DBE3',
        elevation: 3,
        width: '90%',
        margin: 5,
        borderRadius: 10,
    },
    button: {
        elevation: 3,
        width: '70%',
        backgroundColor: "#00BFFF",
        color: "#fff",
        height: 35,
        borderRadius: 10,
        marginLeft: 60,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addSub: {
        backgroundColor: '#00BFFF',
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        justifyContent:'center',
    },
});
export default Booking;