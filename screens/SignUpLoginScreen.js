import  React,{Component} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { render } from 'react-dom';

export default class SignUpLoginScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId: '',
            password: ''
        }
    }
  signUp=(emailID,password)=>{
      firebase.auth().createUserWithEmailAndPassword(emailID, password)
      .then(()=>{
      return Alert.alert("Your account has been created succesfully");
      
      })
    
      .catch((error)=>{
          var errorCode = error.code;
          var errorMessage = error.message;
         return Alert.alert(errorMessage);
  })


  }
  login=(emailID,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailID, password)
    .then((response)=>{
    return Alert.alert("You have successfully login");
    
    })
  
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
       return Alert.alert(errorMessage);
})


}

render(){
    return(
        <View style ={styles.container}>
  
}
