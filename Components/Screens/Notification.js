import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Header } from 'react-native-elements';
import { auth,db } from './firebase';

const Notification = ({ navigation }) => {
///

const [noti,setNoti] = useState([]);
const userId = auth.currentUser.uid;



useEffect(()=>{
        
    db.ref('booking').on('value',snap=>{
      let item = [];
      const a_ =snap.val();
      for (let x in a_){
        item.push({url:a_[x].url , Hotelname:a_[x].Hotelname , days:a_[x].days})
      } 
    setNoti(item)
    })


},[])
// useEffect(() =>
// db.ref('/booking').on()
//     .then((res) => {

//         res.forEach(action => {
//             userinfo.push({ ...action.data(), id: action.id });
//             console.log(action.data())
//         })
//         sethotel(userinfo);
//     )
// )
//)

// useEffect(()=>

// db.ref('/booking').on().then((res) => {
//     let info = [];
//     res.forEach(element => {
//         info.push({ ...action.val(), id: action.id });
//         console.log(info);
//     });

//     setNoti(info);
// }, [])
// )
    
    return (

        <SafeAreaView style={styles.container}>

            <View style={{ margin: 10 }}>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                <TouchableOpacity  onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-backspace" color='#00BFFF' size={22} ></Icon>
                </TouchableOpacity>
                    <Text style={{  color: '#00BFFF', fontWeight: 'bold', fontSize: 20,marginEnd:100}}>Notifications</Text>
                    {/* <Icon name="search" color='#00BFFF' size={25} ></Icon> */}
                </View>
              
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />

          <ScrollView>

             {
                 noti.map(element =>
                    <>
                     <TouchableOpacity  onPress={() => navigation.navigate('AboutNotif')}>
                     <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderRadius: 5, marginTop: 10, backgroundColor: '#f2f4f6',color:'gray' }}>
                         <Avatar  size={70} 
                          source={{ uri: element.url }}/>
                         <View>
                             <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 5,color:'gray' }}>
                                 You have booked  Austratkli Hotel at {'\n'}
                                 {element.Hotelname},for the 2 night
                             </Text >
                            
                         </View>
                     </View>
                 </TouchableOpacity>
                    </>
                    )
             }
          </ScrollView>
               
            </View>

            {/* <Header>
                <View>
                <TouchableOpacity  style={{ }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-backspace" color='#00BFFF' size={20} ></Icon>
                </TouchableOpacity>
                <Text  >
                Notification
                </Text>
                </View>
            </Header> */}
            {/* <View style={{flexDirection:'row', marginTop: 22, marginLeft: 2,marginTop:35}}>
                   <TouchableOpacity  style={{ }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-backspace" color='#00BFFF' size={30} style={{ padding: 5 }}></Icon>
                </TouchableOpacity>
                <Text style={styles.head} >
                Notification
                </Text>
                </View> */}
            {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                
                <Avatar  size={'xlarge'} source={require('../Img/notifications.png')}></Avatar>

                <View style={{borderWidth:1 ,borderColor:'#00BFFF',width:"95%",flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <TextInput  style={{ padding: 5 }} placeholder='search ' />
                    <Icon name="search" color='#00BFFF' size={25} style={{ padding: 5 }}></Icon>
                </View>
            </View>
            <View style={{ flexDirection: 'row',borderBottomWidth:1 ,margin: 5, borderRadius: 5, marginTop:60}}>
                <Image style={{ margin: 10, width: '30%', height: 100 }} source={require('../Img/photo.png')} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 5 }}>
                        Austratkli Hotel
                    </Text >
                    <Text style={{ margin: 5, }}>
                        Polokwane
                    </Text>
                    <TouchableOpacity  style={{ marginLeft:225}} >
                    <Icon name="delete" color='red' size={30} style={{ padding: 5 }}></Icon>
                </TouchableOpacity>
                </View>
                
            </View> */}

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        //  justifyContent: 'center',
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#00BFFF',
        backgroundColor: '#FFFFFF',
      },
    inpux: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    head:
    {
        alignItems: 'center',
        fontSize: 25,
        color: '#00BFFF',
        fontWeight: 'bold',
        marginLeft: 95,
        marginTop: 5,

    },
})
export default Notification;