import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert, Button, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { db } from './firebase';
const Comfirm = ({ navigation,route }) => {
const Hotelname=route.params.Hotelname
    const hotelid=route.params.hotelid
    const days= route.params.days
    const price=route.params.price
    const num = route.params.num
    const nRoom = route.params.nRoom
    const breakfast = route.params.breakfast;
    const checkin = route.params.checkin;
    const checkout = route.params.checkout;
    const url = route.params.url;
    const roomNum = route.params.roomNum;

    const [isVisible, setisVisible] = React.useState(false);
 console.log(hotelid);
 console.log(url);
 console.log(num);
 console.log(nRoom);
 console.log(breakfast);
 console.log(Hotelname);
 console.log(checkin);
 console.log(checkout)
 console.log(roomNum)
 console.log('====================================');
 console.log(price);
 console.log('====================================');
    const displayModel = () => {
        setisVisible(true);
    }


    const book =() =>{

        db.ref('/booking').push({
            hotelid,
            url,
            nRoom,
            breakfast,
            Hotelname,
            checkin,
            checkout,
            roomNum,
            price,

        })

    }

    return (
        <View style={styles.container}>
            <View style={{ margin: 10 }}>
                < Modal animationType={"slide"}
                    transparent={false}
                    visible={isVisible}
                    onRequestClose={
                        () => {
                            Alert.alert('Modal has now been closed.');
                        }
                    }>
                    <View style={{ justifyContent: 'center', marginTop: 200, alignItems: 'center', margin: 30 }}>
                        <View style={{ margin: 12 }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 30 }}>
                                <Avatar source={require('../Img/img1.png')} >
                                </Avatar>
                                < Avatar source={require('../Img/img3.png')} >
                                </Avatar>
                                <Avatar source={require('../Img/img2.png')}>
                                </Avatar>
                            </View>
                            <Text> Card Number </Text>
                            <View style={styles.action} >

                                <TextInput
                                    placeholderTextColor="#666666"
                                    keyboardType="number-pad"
                                    autoCorrect={false}
                                    style={
                                        [
                                            styles.textInputStyle,
                                            {
                                                color: 'black',
                                            },
                                        ]
                                    }
                                />
                            </View>
                            <Text> Card Holder Name </Text>
                            <View style={styles.action}>

                                <TextInput

                                    placeholderTextColor="#666666"
                                    keyboardType="number-pad"
                                    autoCorrect={false}
                                    style={
                                        [
                                            styles.textInputStyle,
                                            {
                                                color: 'black',
                                            },
                                        ]
                                    } />
                            </View >

                            <View style={[
                                styles.action, {
                                    justifyContent: 'space-between',
                                },
                            ]} >
                                <Text> Expiry Date </Text>
                                <Text>CVV</Text>
                            </View>

                            <View 
                            style={[
                                styles.action, {
                                    justifyContent: 'space-between',
                                },
                            ]}
                            >

                                <TextInput
                                    placeholderTextColor="#666666"
                                    keyboardType="number-pad"
                                    autoCorrect={false}
                                    style={{
                                        width: '20%',
                                        color: 'black',
                                        paddingLeft: 2,
                                        margin: 5,
                                        borderColor: '#00BFFF',
                                        backgroundColor: '#FFFFFF',
                                        height: 35,
                                        borderWidth: 1,
                                    }

                                    } />
                                <TextInput
                                    placeholderTextColor="#666666"
                                    keyboardType="number-pad"
                                    autoCorrect={false}
                                    style={


                                        {
                                            width: '20%',
                                            color: 'black',
                                        
                                            margin: 5,
                                            borderColor: '#00BFFF',
                                            backgroundColor: '#FFFFFF',
                                            height: 35,
                                            borderWidth: 1,
                                        }

                                    }
                                />

                            </View>

                            <TouchableOpacity style={styles.commandButton}
                                onPress={() => navigation.navigate('PaymentSuc')} >
                                <Text style={styles.panelButtonTitle}> Submit </Text>
                            </TouchableOpacity>


                        </View>

                    </View>
                </Modal>
                <Text style={{ fontWeight: 'bold', color: '#00BFFF' }}>
                    Review your booking
                </Text>
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: 40 }}>
                       {Hotelname}
                    </Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10, borderWidth: 5, backgroundColor: '#fff', borderRadius: 10, borderColor: '#fff', elevation: 3 }}>

                        <Text style={{fontSize:15,fontWeight: 'bold',color:'green'}}>
{checkin} - {checkout}
{'\n'}
{days} Nights
                            {'\n'}
                            {nRoom} Room {num} Guest
                            {'\n'}
                            Room Number {roomNum}
                        </Text>
                        <Avatar size={80} source={{uri:url}}></Avatar>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                        <Text>
                            Payment Method
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Payment')} >
                            <Icon name='add'   size={15} color='#00BFFF' >Add</Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Avatar source={require('../Img/img2.png')} />
                        <Text>Maluleke Lovers</Text>
                        <Icon name="md-checkmark" color='gray' size={15} />
                    </View>
                    <View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text>
                            R{price} * {days} Nights
                        </Text>
                        <Text>
                        R{price * days}
                        </Text>
                    </View>
                    <View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Total
                        </Text>
                        <Text style={{ fontWeight: 'bold' }}>
                            R{price * days}
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity
                    
                     onPress={() => navigation.navigate('Payment' ,{    hotelid:hotelid,
                        url:url,
                        nRoom:nRoom,
                        num:num,
                        days:days,
                        hotelid:hotelid,
                        breakfast:breakfast,
                        Hotelname:Hotelname,
                        checkin:checkin,
                        checkout:checkout,
                        roomNum:roomNum,
                        price:price,
                        totalPrice:price * days}

              )} 
                    style={{ color: '#fff', backgroundColor: '#00BFFF', height: 40, alignItems: 'center' }}>
                        <Text style={{ marginTop: 10, color: '#fff' }}>
                            Confirm Booking
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //   alignItems: 'center',
        //   justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        //   marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        borderRadius: 10,
        paddingBottom: 5,
    },
    textInputStyle: {
        height: 35,
        borderWidth: 1,
        width: '100%',
        paddingLeft: 2,
        margin: 5,
        borderColor: '#00BFFF',
        backgroundColor: '#FFFFFF',
    },
    commandButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#00BFFF',
        alignItems: 'center',
        marginTop: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Comfirm;