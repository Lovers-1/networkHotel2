import React, {useState} from 'react';
import firebase from './firebase';

const db = firebase.firestore();
// const auth = firebase.auth();
// const _db = firebase.database('/booking');
class Users {

    users = [
        { id: 1, name: 'Lovers', surname: 'Maluleke', location: 'Ga-kagapane' , age :25, gender :'Female' },
        { id: 2, name: 'Nyiko', surname: 'Maluleke', location: 'Ga-kgapane' , age :26  , gender:'Male'},
        { id: 3, name: 'Betty', surname: 'Moyaobo', location: 'Mothabeka'  , age :30 , gender : 'Female'},
        { id: 4, name: 'Mandla', surname: 'Moy', location: 'Mothabeka' , age : 35 , gender : 'Male'}
    ]
     rooms =[
         {id:1,img:require('../Img/hotel1.jpg'),name:'Lovers vkujg '  },
         {id:2,img:require('../Img/hotel2.jpg'),name:'Maluleke'  },
         {id:3,img:require('../Img/hotel3.jpg'),name:'Lovers '  },
         {id:4,img:require('../Img/hotel4.jpg'), name:'Lovers ' },
         {id:5,img:require('../Img/hotel4.jpg'), name:'Lovers ' },
         {id:6,img:require('../Img/hotel2.jpg'),name:'Maluleke'  },
         {id:7,img:require('../Img/hotel3.jpg'),name:'Lovers '  },
         {id:8,img:require('../Img/hotel4.jpg'), name:'Lovers ' },
         {id:9,img:require('../Img/hotel4.jpg'), name:'Lovers ' },
     ]  
    getData(){
         return db;
    } 
    createBooking(data){
          return db.push(data);
      }
    getDataById(key) {
        return db.child(key);
    }

    updateBooking() {
        return db.child(key).update(data);
    }
     deleteBooking() {
        return db.child(key).romove(data);
     }

}

export default new Users();