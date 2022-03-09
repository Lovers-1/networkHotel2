import React from 'react';


import firebase from '../Components/firebase';

const db=firebase.ref('/bookings');
class BookingsFile  {
    
    getData()
    {
return db;
    }

    createBooking(data){
        return db.push(data);
    }

    getBookingById(key){
        return db.child(key);
    }

    updataBooking(key,data){
        return db.child(key).update(data)
    }
    deleteBooking(key)
    {
       return db.child(key).remove()      
}
}

export default new BookingsFile();