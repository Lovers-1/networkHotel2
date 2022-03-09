import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { auth, db } from './firebase';
//
import { Formik } from 'formik';
import * as yup from 'yup';
import DonePassword from './DonePassword';
const SignUp = ({ navigation }) => {
    //
    const [show, setShow] = useState(false);
    const [visiable, setvisiable] = useState(true);
    const [url, setUrl] = useState();
    //


    const ReviewSchem = yup.object({
        email: yup.string().required().min(6),
        password: yup.string().required().min(6),
        name: yup.string().required().max(15).min(3),
        surname: yup.string().required().max(15).min(3),
        phoneNumber: yup.number().required().min(10),
        password: yup.string().required().min(6).max(12),
        cpassword: yup.string().required().min(6).max(12).oneOf([yup.ref('password'), null], 'password doess not math'),
    })
    //
    const [users, setUsers] = React.useState([]);

    //

    const createUser = async (data) => {
        try {
            const { uid, email, password, name, phoneNumber, surname } = data
            const user = await auth.createUserWithEmailAndPassword(
                email.trim().toLowerCase(), password)
            .then(then(res =>{
                res.user.sendEmailVerifcation()
            }))
            
            .then(res => {
                db.ref('user').child(auth.currentUser.uid).set({
                    name: name,
                    surname: surname,
                    email: email,
                    phoneNumber: phoneNumber,
                    url:'lvers',
                    uid: res.user.uid
                })
            })
        }
        catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                Alert.alert(
                    "This email already exist"
                )
            }
            if (
                error.code == 'auth/invalid-email') {
                Alert.alert(
                    "This email already exist"
                )
            }
            else {
              
                navigation.navigate('DonePassword');
                ToastAndroid.show("Account created Succussfully ", ToastAndroid.SHORT);
            }

        }

    }

    return (
        <>

            <View style={styles.container}>
                <Text style={styles.title}>
                    Wellcome To Network Hotel
                </Text>
                <Avatar size={'medium'} source={require('../Img/Sign_in.png')}></Avatar>
                <Formik
                    initialValues={{ email: '', password: '',name:'', phoneNumber:'', surname:'',cpassword:'' }}
                    validationSchema={ReviewSchem}
                    onSubmit={(values, action) => {
                        action.resetForm()
                        createUser(values)
                    }}
                >
                    {(props) =>(
                        <>
                    <View style={styles.inputBox}>
                        <Icon name='person' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                        <TextInput style={{ width: '100%' }}
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            onBlur={props.handleBlur('name')}
                            placeholder='Provider Your Name' />
                    </View>
                    {props.errors.name? <Text style={{color:"red"}}>{props.errors.name}</Text>:null}

                    <View style={styles.inputBox}>
                        <Icon name='person' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                        <TextInput style={{ width: '100%' }}
                            placeholder='Provider Your Surname' 
                            onChangeText={props.handleChange('surname')}
                            value={props.values.surname}
                            onBlur={props.handleBlur('surname')}/>
                    </View>
                    {props.errors.surname? <Text style={{color:"red"}}>{props.errors.surname}</Text>:null}


                    <View style={styles.inputBox}>
                        <Icon name='email' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                        <TextInput style={{ width: '100%' }}
                            placeholder='Provide Your Email Address' 
                            
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            onBlur={props.handleBlur('email')}
                             />
                    </View>
                    {props.errors.email? <Text style={{color:"red"}}>{props.errors.email}</Text>:null}

                    <View style={styles.inputBox}>
                        <Icon name='phone' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                        <TextInput style={{ width: '100%' }}
                            
                            onChangeText={props.handleChange('phoneNumber')}
                            value={props.values.phoneNumber}
                            onBlur={props.handleBlur('phoneNumber')}
                            placeholder='Provider Your Phone Number' />
                    </View>
                    {props.errors.phoneNumber? <Text style={{color:"red"}}>{props.errors.phoneNumber}</Text>:null}

                    <View style={styles.inputBox}>
                        <Icon name='lock' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                        <TextInput style={{ width: '73%' }}
                            placeholder='Create Password'
                            secureTextEntry={visiable}
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                            onBlur={props.handleBlur('password')} />
                        <TouchableOpacity onPress={() => {
                            setShow(!show)
                            setvisiable(!visiable)
                        }}>
                            <Icons name={show === false ? 'eye' : 'eye-off'} size={22} color='#00BFFF' style={{ margin: 10 }}></Icons>
                        </TouchableOpacity>
                    </View>
                    {props.errors.password? <Text style={{color:"red"}}>{props.errors.password}</Text>:null}

                    <View style={styles.inputBox}>
                        <Icon name='lock' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                        <TextInput style={{ width: '73%' }}
                        secureTextEntry={visiable}
                        onChangeText={props.handleChange('cpassword')}
                            value={props.values.cpassword}
                            onBlur={props.handleBlur('cpassword')}
                            placeholder='Confirm Password' />

                    </View>
                    {props.errors.cpassword? <Text style={{color:"red"}}>{props.errors.cpassword}</Text>:null}

                    <TouchableOpacity onPress={props.handleSubmit} style={styles.button}>
                        <Text style={styles.buttonTitle}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.sub}>
                        <Text style={styles.subT}>
                            Already have an account ?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.subTiltle}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </>)}
                </Formik>
            </View>


        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "#00BFFF",
        margin: 5,
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTiltle: {
        color: "#00BFFF",
        fontWeight: '600',
        margin: 5,
        padding: 5,
    },
    subT: {
        color: "#000",
        fontWeight: '600',
        margin: 5,
        padding: 5,
    },
    button: {
        elevation: 3,
        width: '80%',
        backgroundColor: "#00BFFF",
        color: "#fff",
        height: 35,
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitle: {
        color: "#FFF",
        fontWeight: 'bold',

    },
    inputBox: {
        flexDirection: 'row',
        backgroundColor: '#D5DBE3',
        elevation: 3,
        width: '80%',
        margin: 10,
        borderRadius: 10,
    },
    sub: {
        flexDirection: 'row',
    }

});
export default SignUp;