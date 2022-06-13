import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native-web';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  FlatList,
  SafeAreaView,
  Button
} from 'react-native';
import Toolbar from '../Toolbar/Toolbar';
import AddBtn from '../AddBtn/AddBtn';

 function pressRow(oneProject) {
  console.log(oneProject);
}

const  Projects =({navigation}) =>{

  
    return (
      
      <TouchableHighlight onPress={() => {
        pressRow(oneProject);
      }}>
      <View style={styles.text}>
        
        <Toolbar/>
        <View style={styles.button}>
       <Button  onPress={()=>navigation.navigate('AddForm')} title="Add a new Project"></Button>
      </View>
        <FlatList
        data={projects}
        renderItem={oneProject}
        />
      </View>
      </TouchableHighlight>
     
    );
  }
    



const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    justifyContent: 'center',
    padding:12,
    backgroundColor:'#b0d4ff',
    marginBottom: 3
  },
  text: {
    flex:1
    },
    button:{
      backgroundColor:'#066377',
      padding:10,
      margin:10
    }
}); 
const projects = [
  {
    id:1,
    name: 'Project One',
    category: 'Mobile App',
    description: 'Awesome React Native application',
    leader: 'John Doe',
    due: '07-01-2017'
  },
  {
    id:2,
    name: 'Project Two',
    category: 'Web App',
    description: 'Cool Ruby on rails application',
    leader: 'Kevin Smith',
    due: '09-01-2017'
  },
  {
    id:3,
    name: 'Project Three',
    category: 'Web App',
    description: 'Great Node.js application',
    leader: 'Sara Wilson',
    due: '010-01-2017'
  }
];
const oneProject = ({item})=> (
  <Text style={styles.row}>{item.name}</Text> 
)

export default Projects;