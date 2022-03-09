import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import Icons from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-elements/dist/buttons/Button";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { _db } from "./firebase";

const Avaliable = ({ navigation ,route}) => {
  const [rooms, setRooms] = useState([]);
const hotelid=route.params.postId
const days= route.params.days
const num = route.params.num
const Hotelname=route.params.Hotelname
const nRoom = route.params.nRoom
const breakfast = route.params.breakfast;
const checkin = route.params.checkin;
const checkout = route.params.checkout;

    console.log(checkin);
    console.log('sxwds',checkout);
console.log('====================================');
console.log(num , 'breakfast' , breakfast,Hotelname  );
console.log(nRoom)

console.log('====================================');

console.log('days',days)



  useEffect(() => {
    let userinfo = [];
    _db
      .collection("Room")
      .get()
      .then((res) => {
        res.forEach((action) => {
          userinfo.push({ ...action.data(), id: action.id });
          console.log(action.data());
        });
        setRooms(userinfo);
      });
  }, []);

  console.log(rooms);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ margin: 10 }}>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="keyboard-backspace" color="#00BFFF" size={22}></Icon>
            </TouchableOpacity>
            <Text
              style={{
                color: "#00BFFF",
                fontWeight: "bold",
                fontSize: 20,
                marginLeft: 95,
              }}
            >
              Avaliable Rooms
            </Text>
            {/* <Icon name="search" color='#00BFFF' size={25} ></Icon> */}
          </View>
          {/* <View style={{ marginTop:40, borderWidth: 5, backgroundColor: '#fff', borderRadius: 10, borderColor: '#fff', elevation: 3, padding: 4, justifyContent:'center',alignItems:'center' , backgroundColor:'#fff'}}>
          <Avatar size={350} source={require("../Img/hotel1.jpg")}/>
          <Text>Lovers majsdc</Text>
          <Text>Lovers majsdc</Text>
          <Text>Lovers majsdc</Text>
          </View> */}

          
<ScrollView >
  
{
      rooms.map((action) => 

      <>
    {
        action.ghid== hotelid?(
          
            <>
            <View  style={{elevation:3,borderWidth: 5, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#fff', borderRadius: 10,margin:10}}>
            <Text  style={{color:'grey',fontSize:15}} >  Room Number { action.name}</Text>
        <ScrollView 
       
            showsHorizontalScrollIndicator={false}
          horizontal={true}>
           <View style={{ margin: 5 }}>
              <Avatar size={200}source={{ uri: action.url }} />
            </View>
            <View style={{ margin: 5 }}>
              <Avatar size={200} source={{ uri: action.url1 }}/>
            </View>
            <View style={{ margin: 5 }}>
              <Avatar size={200} source={{ uri: action.url2 }}></Avatar>
              
            </View>
          </ScrollView>
          <Text style={{ marginTop: 5,fontSize:10, }}>
                            {action.desc}
                        </Text>
                        <Text style={{ marginTop: 5,fontSize:10,color:'green' }}>
                           R ' {action.beds} per Night
                        </Text>
                        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <TouchableOpacity style={{marginBottom:5, backgroundColor: '#00BFFf', justifyContent: 'flex-end', height: 30, width: '40%', borderRadius: 4, marginTop: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Confirm',{
                        hotelid:hotelid , days:days, num:num,nRoom:nRoom,breakfast:breakfast,roomNum:action.name , Hotelname:Hotelname,price:action.beds,checkin:checkin,checkout:checkout,roomNum:action.name, url:action.url 
                      
                        })}>
                            <Text style={{ color: '#fff',fontWeight:'bold' }}>
                                BOOK
                            </Text>
                        </TouchableOpacity> 

                        <Text style={{color:'red'}}>Avaliable</Text>
                        </View>
                        </View>
        </>
        ):(
            <>
            
            {/* <Text>
                no rooms</Text> */}
                </>
        )
    }
     
        {/* <Text  style={{color:'grey',fontSize:15}} >  Room Number { action.name}</Text>
        <ScrollView 
            showsHorizontalScrollIndicator={false}
          horizontal={true}>
           <View style={{ margin: 5 }}>
              <Avatar size={250}source={{ uri: action.url }} />
            </View>
            <View style={{ margin: 5 }}>
              <Avatar size={250} source={{ uri: action.url1 }}/>
            </View>
            <View style={{ margin: 5 }}>
              <Avatar size={250} source={{ uri: action.url2 }}></Avatar>
              
            </View>
          </ScrollView>
          <Text style={{ marginTop: 5,fontSize:10, }}>
                            {action.desc}
                        </Text>
                        <TouchableOpacity style={{ backgroundColor: '#00BFFf', justifyContent: 'flex-end', height: 40, width: '40%', borderRadius: 4, marginTop: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Confirm')}>
                            <Text style={{ color: '#fff',fontWeight:'bold' }}>
                                BOOK
                            </Text>
                        </TouchableOpacity>  */}
        
          </>
        )
  }

</ScrollView>

     
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    //  justifyContent: 'center',
  },

  box:{
  shadowColor: "#000",
shadowOffset:{
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
  }
});
export default Avaliable;
