import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddForm from '../AddForm/AddForm';
const AddBtn =({navigation}) =>{
    return (

        <View style={styles.button}>
       <Button  onPress={()=>navigation.navigate('AddForm')} title="Add a new Project"></Button>
      </View>
)
  }


const styles = StyleSheet.create({
    button:{
      backgroundColor:'#066377',
      padding:10,
      margin:10
    },
    text:{
      color:'#ffffff',
      textAlign:'center'
    }
  });

export default AddBtn;
