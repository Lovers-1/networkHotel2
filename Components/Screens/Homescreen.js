import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import {auth, db, _db} from './firebase';

//

const { height, width } = Dimensions.get('window');
const Homescreen = ({ navigation }) => {

  const [search, setSearch] = useState("");
    const [hotel, sethotel] = useState([]);

    // const [userInfo,  setUserInfo] = ([]);

   

const userId = auth.currentUser.uid;

       
  const [name , setName] = useState();
  const [surname , setSurname] = useState();
  const [phoneNumber , setPhoneNumber] = useState();
  const [email , setemail] = useState();


  useEffect(()=>{
      db.ref('/user/' + userId).on("value",value=>{

        console.log(value.val())
        setName(value.val().name)
        setSurname(value.val().surname)
        setemail(value.val().email)
        setPhoneNumber(value.val().phoneNumber)
      })
  },[]);



    useEffect(() => {
        let userinfo = [];
        _db.collection('hotel').get()
            .then((res) => {

                res.forEach(action => {
                    userinfo.push({ ...action.data(), id: action.id });
                    console.log(action.data())
                })
                sethotel(userinfo);
            })
console.log(auth.currentUser.uid);
    }, [])


    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    backgroundColor="#00BFFF"
                    barStyle="light-content"
                />
                <View style={{ backgroundColor: '#00BFFF', height: 70, width: '100%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ color: '#fff', marginTop: 20, marginLeft: 10 }}>
                        WELLCOME  {'\n'}
                        {name}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Icon name='notifications-sharp' size={22} color='#FFF' style={{ marginTop: 20, marginRight: 10 }}></Icon>
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={{ color: '#00BFFF', margin: 10, fontWeight: 'bold', fontSize: 25 }}>
                        Find your hotel
                    </Text>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Icon name='location-outline' size={22} color='#00BFFF' style={{ marginTop: 18, marginLeft: 10 }}></Icon>
                        <View style={{ backgroundColor: '#D5DBE3', height: 40, width: '88%', margin: 10, borderRadius: 10, flexDirection: 'row' }}>
                            <TextInput style={{ padding: 5, width: '88%', margin: 5, }} placeholder="Seacher Location" />
                            <TouchableOpacity>
                                <Icon name='md-search-sharp' style={{ marginTop: 10 }} size={22} color='#00BFFF' ></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={15}
                    >
                        {/* 
, height: 4000 */}
                        <View style={{ width: "95%", margin: 10 }}>
                            {
                                hotel.map((action =>
                                    <TouchableOpacity key={action.id} >
                                        <View style={{ width: "95%", height: null, margin: 8, flexDirection: 'row', borderWidth: 5, backgroundColor: '#fff', borderRadius: 10, borderColor: '#fff', elevation: 3, padding: 4 }}>
                                            <Avatar
                                                size={120}

                                                source={{ uri: action.url }}

                                            />

                                            <View style={{ padding: 10, width: '65%' }}>
                                                <View style={{ borderBottomColors: 'gray', borderBottomWidth: 0.5 }}>
                                                    <Text style={{ fontWeight: 'bold', color: 'gray' }}> {action.hotelName}</Text>
                                                    <Text style={{ color: 'gray',padding:0,marginBottom:2 }}>

                                                        <Icon name='location-outline' size={22} color='#00BFFF' style={{}}></Icon>
                                                        {action.address}
                                                    </Text>

                                                </View>
                                                <Text>
                                                Start from    R500,00 Per Nights
                                                </Text>
                                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                                    <View>
                                                        <Text style={{ color: 'gray' }}>
                                                            View All Deals
                                                        </Text>
                                                        <Text style={{ fontSize: 10, color: 'gray' }}>
                                                            3 Avaliable
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity onPress={() => navigation.navigate('Booking'  , {postId:action.id ,postName:action.hotelName,postUrl:action.url })} 
                                                    style={{ color: '#fff', padding: 5, backgroundColor: "#00BFFF", alignItems: 'center', borderRadius: 10, justifyContent: "space-around", flexDirection: 'row' }}>
                                                        <Text style={{ color: '#fff' }}>
                                                            View
                                                        </Text>
                                                        <Icon size={20} color={'#fff'} style={{ color: '#fff', marginLeft: 10 }} name='chevron-forward-circle-outline'></Icon>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }

                        </View>
                    </ScrollView>

                </View>


            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    onborder: {
        flexDirection: 'row',
        // margin:1,


    },
    com: {
        flexDirection: 'row',
        margin: 2,
        justifyContent: 'space-between'
    },
    header: {
        fontSize: 15,
        fontWeight: 'bold',

        //    padding:5,
    }
});
export default Homescreen;