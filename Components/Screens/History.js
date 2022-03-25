
// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use

import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
import { db } from './firebase';
  
  const History = () => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
   
    useEffect(() => {
      const item =[]
      db.ref('booking').on('value',snap=>{
        let item = [];
        const a_ =snap.val();
        for (let x in a_){
          item.push({url:a_[x].url , Hotelname:a_[x].Hotelname , days:a_[x].days,bookingStatus:a_[x].bookingStatus})
        } 
     
      setFilteredDataSource(item);
      setMasterDataSource(item);
      })
      // fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then((response) => response.json())
      //   .then((responseJson) => {
      //     setFilteredDataSource(responseJson);
      //     setMasterDataSource(responseJson);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    }, []);
  
    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource.filter(
          function (item) {
            const itemData = item.Hotelname
              ? item.Hotelname.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
      }
    };
    const deleteBooking = (id) => {
      _db.ref('/booking/').child(id).remove();
 
     // bookingRef.remove();
   };
    const ItemView = ({item}) => {
      return (
        <>
        <View>

          <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderRadius: 5, marginTop: 10, backgroundColor: '#f2f4f6',color:'gray',padding:5 }}>
                         <Avatar  size={70}
                         
                          source={{ uri: item.url }}/>
                         <View style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
                             {/* <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 5,color:'gray' }}>
                                 You have booked  Austratkli Hotel at {'\n'}
                                 {item.Hotelname},for the 2 night
                             </Text > */}
                             <View>
                             <Text>
                                 {item.Hotelname}
                             </Text>
                             <Text>
                                 {item.days} days
                             </Text>
                             </View>

                             <View>

                             <Text style={{color:'red',marginLeft:150}} >
                                 {/* {item.bookingStatus} */}

                                 <Icon name="favorite" color='gray' size={24} />
                                 <TouchableOpacity onPress={deleteBooking}>
                                 <Icon name="delete" color='red' size={24} />
                                 </TouchableOpacity>

                             </Text>
                             </View>
                            
                         </View>
                     </View>
        </View>
        </>
        // Flat List Item
        // <Text
        //   style={styles.itemStyle}
        //   onPress={() => getItem(item)}>
        //   {item.id}
        //   {'.'}
        //   {item.title.toUpperCase()}
        // </Text>
      );
    };
  
    const ItemSeparatorView = () => {
      return (
        // Flat List Item Separator
        
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#C8C8C8',
          }}
        />
      );
    };
  
    const getItem = (item) => {
      // Function for click on an item
      alert('Id : ' + item.id + ' Title : ' + item.title);
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />

          
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    itemStyle: {
      padding: 10,
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
    },
  });
  
  export default History;