import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Button,
  Platform,
  Image,
  ToastAndroid
} from "react-native";

import { Avatar } from "react-native-elements/dist/avatar/Avatar";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { auth, db } from "./firebase";

const UpdateProfile = () => {
  //fuctions

  const [image, setImage] = useState("../Img/Ellipse.png");
  //
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });
    // let uploadTask = storage.ref(`images/${image.name}`).put(image)
    // ;
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setemail] = useState();
 const [url,seturl] = useState();
  //
  const userId = auth.currentUser.uid;

  const updateUser = () => {
    db.ref("/user/" + userId).update({
      name: name,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
      
    });
    ToastAndroid.show("Succussfully Updated ", ToastAndroid.SHORT)
  };

  useEffect(()=>{
    db.ref('/user/' + userId).on("value",value=>{

      console.log(value.val())
      setName(value.val().name)
      setSurname(value.val().surname)
      setemail(value.val().email)
      setPhoneNumber(value.val().phoneNumber)
      seturl(value.val().url)
    })
},[]);
  
//




  return (
    <>
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <View style={styles.container}>


          <View style={{ margin: 10 }}>
            <View style={{ alignItems: "center", marginTop: 5 }}>
            
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {image && <Avatar rounded size={80} source={{ uri: url }} />}

                <FontAwesome
                  name="camera"
                  size={20}
                  color={"#00BFFF"}
                  onPress={pickImage}
                />
              </View>
            </View>
 
            <View style={styles.action}>
              <FontAwesome name="user-o" color={"#00BFFF"} size={20} />
              <TextInput
                placeholder="First Name"
                value={name}
                onChangeText={text =>setName(text)}
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: "black",
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="user-o" color={"#00BFFF"} size={20} />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                value={surname}
                onChangeText={text =>setSurname(text)}
                style={[
                  styles.textInput,
                  {
                    color: "black",
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <Feather name="phone" color={"#00BFFF"} size={20} />
              <TextInput
              value={phoneNumber}
                placeholder="Phone"
                onChangeText={text =>setPhoneNumber(text)}
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: "black",
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="envelope-o" color={"#00BFFF"} size={20} />
              <TextInput
             value={email}
                placeholder="Email"
                placeholderTextColor="#666666"
                keyboardType="email-address"
                autoCorrect={false}
                onChangeText={text =>setemail(text)}
                style={[
                  styles.textInput,
                  {
                    color: "black",
                  },
                ]}
              />
            </View>
            {/* <View style={styles.action}>
              <FontAwesome name="lock" color={"#00BFFF"} size={20} />
              <TextInput
                placeholder="Create Password"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: "black",
                  },
                ]}
              />
              <FontAwesome name="eye" color={"#00BFFF"} size={20} />
            </View> */}
            {/* <View style={styles.action}>
              <Icon name="lock" color={"#00BFFF"} size={20} />
              <TextInput
              value={password}
                placeholder="Confirm Password"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: "black",
                  },
                ]}
              />
              <FontAwesome name="eye" color={"#00BFFF"} size={20} />
            </View> */}
           
            <TouchableOpacity style={styles.commandButton} onPress={ updateUser}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    //   marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
export default UpdateProfile;
