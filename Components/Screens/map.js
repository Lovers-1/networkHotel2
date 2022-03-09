// import React from "react";
// import { Text, View, StyleSheet, Button ,Dimensions} from "react-native";
// import { OpenMapDirections } from 'react-native-navigation-directions';
// import Icon from "react-native-vector-icons/FontAwesome5"
// import MapView from 'react-native-maps';

// const map = ({ navigation }) => {

    

    
//      _callShowDirections = () => {
//         const startPoint = {
//           longitude: -8.945406,
//           latitude: 38.575078
//         } 
    
//         const endPoint = {
//           longitude: -8.9454275,
//           latitude: 38.5722429
//         }
    
//             const transportPlan = 'w';
    
//         OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
//           console.log(res)
//         });
//       }

//   return (
//     <>
//        <View style={style.container}>
//         <Text>Show direction between two random points!</Text>
//         {/* <Button
//         onPress={() => { this._callShowDirections() }} 
//         // title="Open map"
//         Icon  name="directions"

        
//         color="#841584"
//       /> */}
//        <MapView style={style.map} />
//       </View>
//     </>
//   );
// };
// const style = StyleSheet.create({

   
//     map: {
//       width: Dimensions.get('window').width,
//       height: Dimensions.get('window').height,
//     },

// });
// export default map;
