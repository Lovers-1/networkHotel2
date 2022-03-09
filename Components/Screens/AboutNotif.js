import React from 'react';
import { Text, View, StyleSheet, Alert, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import Icons from 'react-native-vector-icons/Ionicons';
const AboutNotif = ({ navigation }) => {

    const showAlert = () =>
        Alert.alert(
            "Are your sure?",
            "Are you sure you want to cancal?",
            [
                {
                    text: "No",

                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    onPress: () => navigation.goBack(),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );
    return (
        <>
            <SafeAreaView style={styles.container}>

                <View style={{ margin: 10 }}>

                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="keyboard-backspace" color='#00BFFF' size={22} ></Icon>
                        </TouchableOpacity>
                        <Text style={{ color: '#00BFFF', fontWeight: 'bold', marginLeft: 90 }}>My Booking</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>

                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', borderWidth: 5, backgroundColor: '#fff', borderRadius: 10, borderColor: '#fff', elevation: 3 }}>
                            <Text style={{ color: '#000', fontWeight: 'bold', color: 'gray' }}>
                                Up Coming
                            </Text>
                            <Text style={{ color: 'gray' }}>
                                Booking
                            </Text>

                        </View>
                        <Text style={{ marginTop: 15, marginBottom: 15, color: 'gray' }}>
                            Polokwane
                        </Text>
                        <Image source={require('../Img/hotel1.jpg')} style={{ width: '100%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, height: '40%', marginTop: 10 }}></Image>


                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#00BFFF' }}>
                                City Of Jonas
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                                R500.00
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }} >

                            <Text style={{ color: '#00BFFF' }}> For Direction</Text>
                            <TouchableOpacity >
                                <Icon name="directions" color='#00BFFF' size={20}></Icon>
                            </TouchableOpacity>

                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }} >

                            <Text style={{ color: '#00BFFF' }}> For Call</Text>
                            <TouchableOpacity >
                                <Icon name="call" color='#00BFFF' size={20}></Icon>
                            </TouchableOpacity>

                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#00BFFF' }}>
                                Room Number
                            </Text>
                            <Text style={{ color: '#00BFFF' }}>
                                1
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#00BFFF' }}>
                                <Icons name='location-outline' size={20} color='#00BFFF' style={{}}></Icons>

                                Polokwane,  84 Schoeman st
                            </Text>

                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#00BFFF' }}>
                                Expriy Date
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#00BFFF' }}>
                                Beds types
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#00BFFF' }}>
                                Number Of People
                            </Text>
                        </View>

                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#00BFFF' }}>
                                12 Jan - 13 Jan
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#00BFFF' }}>
                                King
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#00BFFF' }}>
                                2 adults 0 childern
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#00BFFF' }}>
                                Cancel Booking
                            </Text>
                            <TouchableOpacity style={styles.button} onPress={showAlert}>
                                <Text style={{ color: '#fff' }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>


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
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    info: {
        width: '100%',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderColor: '#00BFFF',
    },
    button: {
        elevation: 3,
        width: '40%',
        backgroundColor: "#00BFFF",
        color: "#fff",
        height: 30,
        borderRadius: 10,
        // margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default AboutNotif;