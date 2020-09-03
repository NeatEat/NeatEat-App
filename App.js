// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import {SearchScreen} from './screen/search';
import {CameraScreen} from './screen/camera';
import {DirectoryScreen} from './screen/directory';


const Tab = createBottomTabNavigator();

function App() {

  const TabBarOptions = {
    // activeTintColor: '#e91e63',
    showLabel : 'false',
  }

  const CameraScreenOptions = { 
    tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="camera" color={color} size={size}  /> ), 
  }

  const SearchScreenOptions = { 
    tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="magnify" color={color} size={size}  /> ), 
  }

  const DirectoryScreenOptions = { 
    tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="menu" color={color} size={size}  /> ), 
  }


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Search" tabBarOptions={TabBarOptions}>      
        <Tab.Screen name="Camera" component={CameraScreen} options={CameraScreenOptions} />
        <Tab.Screen name="Search" component={SearchScreen} options={SearchScreenOptions} />
        <Tab.Screen name="Directory" component={DirectoryScreen} options={DirectoryScreenOptions} />
      </Tab.Navigator>      
    </NavigationContainer>
  );
}

export default App;