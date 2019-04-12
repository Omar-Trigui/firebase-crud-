/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *  <View >
        <Header title="title from the props">App Title</Header>
        <Text >Welcome Omar Trigui!</Text>
      </View>
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase'




export default class App extends Component {
  componentWillMount( ){
        // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDg99d1c-ZUe6IBJIHa0kCuBn6BY2KDx6Y",
        authDomain: "reactnativedatabase-62636.firebaseapp.com",
        databaseURL: "https://reactnativedatabase-62636.firebaseio.com",
        projectId: "reactnativedatabase-62636",
        storageBucket: "reactnativedatabase-62636.appspot.com",
        messagingSenderId: "270544064639"
      };
      firebase.initializeApp(config);
      firebase.database().ref('admin').on('value' , (data) => {
        console.log(data.toJSON());
 
      });
              // To Await 5 seconds to insert a new user
      // setTimeout(() => {
      //   firebase.database().ref('admin/2').set(
      //     {
      //     name : 'salah',
      //     age : '23'
      //   }
      //   ).then(()=>{
      //     console.log("inserted");
  
      //   }).catch((error)=>{
      //     console.log(error);
  
      //   });
               
      // }, 5000);
      // firebase.database().ref('admin/2').update({
      //     name : 'beji'
      // });
      firebase.database().ref('admin/2').remove();
 
    
    }
  render() {
    return (
   <View>
     <Text>hello world</Text>
   </View>
    );
  }
}


