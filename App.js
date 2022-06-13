import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toolbar from './app/components/Toolbar/Toolbar';
import Projects from './app/components/Projects/Projects';
import AddBtn from './app/components/AddBtn/AddBtn';
import AddForm from './app/components/AddForm/AddForm';

function  HomeScreen()
{
  
  return(

   
    <View style={styles.container}>
        
          <Toolbar/>
          <Projects  />
        </View>
      
  );

  } 
  const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= 'Projects'>
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="AddForm" component={AddForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
     backgroundColor:'#f0ffff',
    //height:Dimensions.get('window').height
  }
});

