import React from 'react';
import { SafeAreaView, Text, View, StyleSheet,TextInput,TouchableOpacity, ToastAndroid  } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
const PaymentSuc = ({navigation}) => {
  setTimeout(()=>{
    navigation.replace('TabScreen');
    ToastAndroid.show("Succussfully placed your booking ", ToastAndroid.SHORT);
  }, 5000);
    return(

        <>
         <SafeAreaView style={styles.container}>
      <Icons name="md-checkmark-circle-outline" size={150} color='#00BFFF' style={{ padding: 5 }}></Icons>
      <Text style={{color:'#00BFFF'}}>
        Payment  was successfuly made
      </Text>
    </SafeAreaView>
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
        borderRadius:10,
        paddingBottom: 5,
      },
      textInputStyle: {
        height: 35,
        borderWidth: 1,
        width:'100%',
        paddingLeft: 20,
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
})

export default PaymentSuc;