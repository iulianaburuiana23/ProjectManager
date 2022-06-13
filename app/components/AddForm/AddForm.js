import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AddForm extends Component {
  constructor(){
    super();
    this.state = {
      id:'',
      name:'',
      class:'',
      description:'',
      teacher:'',
      due:'',
      projects:[]
    }
  }

  componentDidMount(){
    this.getProjects();
    this.generateId();
  }

  getProjects(){
    AsyncStorage.getItem('projects').then((value) => {
      console.log(value);
      if(value != undefined){
        this.setState('projects', JSON.parse(value));
      }
    });
  }

  generateId(){
    let id = Math.floor(Math.random() * 1000000000);
    this.setState({id});
  }

  onSubmit(){
    let projects = this.state.projects;

    projects.push({
      id: this.state.id,
      name: this.state.name,
      class:this.state.class,
      description:this.state.description,
      teacher: this.state.teacher,
      due: this.state.due
    });

    AsyncStorage.setItem('projects', JSON.stringify(projects));

    this.props.navigator.push({
      id:'projects'
    });
  }

  render() {
    return (
        <>
      <View style={styles.addForm}>
        <TextInput
          value={this.state.name}
          placeholder="Project Name"
          onChangeText = {(value) => this.setState({name:value})}
        />
        <TextInput
          value={this.state.class}
          placeholder="Project Class"
          onChangeText = {(value) => this.setState({class:value})}
        />
        <TextInput
          value={this.state.description}
          placeholder="Project Description"
          onChangeText = {(value) => this.setState({description:value})}
        />
        <TextInput
          value={this.state.teacher}
          placeholder="Project Teacher"
          onChangeText = {(value) => this.setState({teacher:value})}
        />
        <TextInput
          value={this.state.due}
          placeholder="Project Due"
          onChangeText = {(value) => this.setState({due:value})}
        />
        <View style={styles.submit}>
        <Button
          title="Submit"
          style={styles.btn}
          onPress={this.onSubmit.bind(this)}
          color="black"
        />
        </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  addForm: {
    backgroundColor:'#b0d4ff',
    padding:20,
    borderWidth: 1
  }
});

AppRegistry.registerComponent('AddForm', () => AddForm);
