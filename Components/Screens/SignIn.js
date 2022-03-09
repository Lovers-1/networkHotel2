import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    TouchableOpacityBase,
    Alert,
    ToastAndroid,
    Animated,
    ActivityIndicator
} from "react-native";
//
import Toast from "react-native-toast-message";
//
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/Ionicons";
//
import { Formik } from "formik";
import * as yup from "yup";
import { db, auth } from "./firebase";

const SignIn = ({ navigation }) => {
    //
    const ReviewSchem = yup.object({
        email: yup.string().email('Invalid email format').required().min(2, 'To Short!!'),
        password: yup.string().required().min(6),
    });
    const [show, setShow] = useState(false);
    const [visiable, setVisiable] = useState(true);

    //
    const signIn = async (data) => {
        try {
            const { email, password } = data;
            const user = await auth
                .signInWithEmailAndPassword(email.trim().toLowerCase(), password)
                .then((res) => {
                    try {
                        // const jsonValue = JSON.stringify(res.user)
                        // setItem('user', res.user.uid)
                        // localStorage.setItem("user", res.user.uid)
                        navigation.navigate("TabScreen");
                    } catch (e) {
                        console.log("no data");
                    }
                });

                <ActivityIndicator size="large"
                color="#000" />
            // Alert.alert("Succesfully logged in ");
            ToastAndroid.show("Succussfully loged in ", ToastAndroid.SHORT)

            Toast.show({
                type: 'success',
                text1: 'Hello',
                text2: 'This is some something 👋'
            });
        } catch (error) {
            Alert.alert(error.name, error.message);
        }
    };
    
return (
        <>
            <View style={styles.container}>
                <Text style={styles.title} > Wellcome Back! </Text>
                <Avatar size="xlarge" source={require("../Img/Login.png")}/>
                <Formik initialValues={{ email: "", password: "" }}
                    validationSchema={ReviewSchem}
                    onSubmit={
                        (values, action) => {
                            action.resetForm();
                            signIn(values);
                        }}>
                    {(props) => (
                        <>
                            <View style={styles.inputBox}>
                                <Icon name="email"
                                    size={22}
                                    color="#00BFFF"
                                    style={{ margin: 10 }}>
                                </Icon>
                                < TextInput style={{ width: "100%" }}
                                    placeholder="Enter Your Email"
                                    onChangeText={props.handleChange("email")}
                                    value={props.values.email}
                                    onBlur={props.handleBlur("email")} />
                            </View>
                            {props.errors.email ? (<Text style={{ color: "red" }} > {props.errors.email} </Text>) : null}
                            <View style={styles.inputBox}>
                                <Icon name="lock"
                                    size={22}
                                    color="#00BFFF"
                                    style={
                                        { margin: 10 }}>

                                </Icon>
                                <TextInput style={{ width: "73%" }}
                                    placeholder="Provide Password"
                                    secureTextEntry={visiable}
                                    onChangeText={props.handleChange("password")}
                                    value={props.values.password}
                                    onBlur={props.handleBlur("password")} />
                                <TouchableOpacity onPress={() => { setVisiable(!visiable); setShow(!show); }}>
                                    <Icons name={show === false ? "eye" : "eye-off"}
                                        size={22}
                                        color="#00BFFF"
                                        style={
                                        { margin: 10 }}>
                                    </Icons>
                                </TouchableOpacity>
                            </View>
                            {props.errors.password ? (<Text style={{ color: "red" }} >{props.errors.password}</Text>) : null}
                            <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                            <Text style={styles.subTiltle} > Forget Password </Text>
                            </TouchableOpacity >
                            <TouchableOpacity onPress={props.handleSubmit} style={styles.button}>
                                <Text style={styles.buttonTitle}> SIGN IN </Text>
                            </TouchableOpacity >
                            <View style={styles.sub} >
                                <Text style={styles.subT} > Don 't have an account ?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                                    <Text style={styles.subTiltle} > Sign Up </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#00BFFF",
        margin: 5,
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    subTiltle: {
        color: "#00BFFF",
        fontWeight: "600",
        margin: 5,
        padding: 5,
    },
    subT: {
        color: "#000",
        fontWeight: "600",
        margin: 5,
        padding: 5,
    },
    button: {
        elevation: 3,
        width: "80%",
        backgroundColor: "#00BFFF",
        color: "#fff",
        height: 35,
        borderRadius: 10,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonTitle: {
        color: "#FFF",
        fontWeight: "bold",
    },
    inputBox: {
        flexDirection: "row",
        backgroundColor: "#D5DBE3",
        elevation: 3,
        width: "80%",
        margin: 10,
        borderRadius: 10,
    },
    sub: {
        flexDirection: "row",
    },
});

export default SignIn;