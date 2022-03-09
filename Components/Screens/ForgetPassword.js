import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

//
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth } from './firebase';


const ForgetPassword = ({navigation}) => {

    const [email, setEmail] =useState();

     
    const ReviewSchem = yup.object({
        email: yup.string().required().min(6),
    })

    const passRest =() =>{
        auth.sendPasswordResetEmail(email).then( res =>{
            navigation.navigate('DonePassword')
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
<SafeAreaView   style={styles.container}>
<TouchableOpacity style={{marginTop:25, marginLeft: 2,backgroundColor:"white" }} onPress={() => navigation.goBack()}>
                        <Icon name="keyboard-backspace"  color='#00BFFF' size={30} style={{ padding: 5 }}></Icon>
                    </TouchableOpacity>

                   
             <View style={styles.con}>
             {/* <Formik
                    initialValues={{ email: '' }}
                    validationSchema={ReviewSchem}
                    onSubmit={(value, action) => {
                        action.resetForm()
                        passRest(value)
                    }}
                >
                    {(props) =>(
                        <> */}
                <Avatar size={"xlarge"} source={require('../Img/Password.png')}></Avatar>
                <View style={styles.inputBox}>
                    <Icon name='email' size={22} color='#00BFFF' style={{ margin: 10 }}></Icon>
                    <TextInput  style={{width:'100%'}}
                     placeholder='Enter Your Email' 
                     onChange={(e) =>setEmail(e)}
                    // onChangeText={props.handleChange("email")}
                    // value={props.values.email}
                    // onBlur={props.handleBlur("email")} 
                    />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Avaliable')} style={styles.button}>
                    <Text style={styles.buttonTitle}>
                    CONTIUNE
                    </Text>
                </TouchableOpacity>
                {/* </>)}
                </Formik> */}
             </View>
             </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //  alignItems: 'center',
        //  justifyContent: 'center',
    },
con:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:80,
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
        borderRadius:10,
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
        borderRadius:10, 
    },
    sub:{
        flexDirection: 'row',
    }
});
export default ForgetPassword; 