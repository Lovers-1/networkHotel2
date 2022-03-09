import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DonePassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Icons name="md-checkmark-circle-outline" size={150} color='#00BFFF' style={{ padding: 5 }}></Icons>
      <Text style={styles.subTiltle}>
        {/* Password was successfuly reset */}
Account create successfuly
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.button}>
        <Text style={styles.buttonTitle}>
          DONE
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTiltle: {
    color: "#D5DBE3",
    fontWeight: '600',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },

  button: {
    elevation: 3,
    width: '80%',
    backgroundColor: "#00BFFF",
    color: "#fff",
    height: 35,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    color: "#FFF",
    fontWeight: 'bold',

  },
});

export default DonePassword;