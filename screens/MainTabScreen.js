import React from 'react';
import {createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {Button, StyleSheet, View, Text} from 'react-native';

import HomeScreen from './HomeScreen';
import AddScreen from './AddScreen';
import BookMarksScreen from './BookMarksScreen';
import HistoryScreen from './HistoryScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeStack = createStackNavigator();
const AddProductStack = createStackNavigator();
const BookMarksStack = createStackNavigator();
const CartStack = createStackNavigator();
const HistoryStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff" >
      
      <Tab.Screen 
        name="Home"
        component={HomeStackScreen}
        options={{
          
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookMarksStackScreen}
        options={{
          tabBarLabel: 'Bookmarks',
          tabBarColor: '#0A7328',
          tabBarIcon: ({color}) => (
            <Text><Icon name="md-bookmarks" color={color} size={25} /></Text>
          ),
        }}
      />
       <Tab.Screen
        name="Add Item"
        component={AddProductStackScreen}
        
        options={{
          tabBarLabel: () => {return null},
          tabBarColor: 'grey',
          tabBarIcon: ({color}) => (
            <Icon name="add-circle" color={'white'} size={50} style={{  marginLeft:50, height: 100 , width: 100, zIndex: 999, top: -13}}/>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarColor: '#A521A9',
          tabBarIcon: ({color}) => (
            <Icon name="clipboard" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Console"
        component={AddScreen}
        options={{
          tabBarLabel: 'Console',
          tabBarColor: '#0C3C5D',
          tabBarIcon: ({color}) => (
            <Icon name="library-sharp" color={color} size={25} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },

      headerTintColor: '#afff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flexGrow: 1,
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',

        //headerRight: () => <View style={{padding: 6}}></View>,
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <FilterButton></FilterButton>
            
          </View>
        ),
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
            style={{paddingLeft: 16}}></Icon.Button>
        ),
        
      }}
    />
  </HomeStack.Navigator>
);

const BookMarksStackScreen = ({navigation}) => (
  <BookMarksStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0A7328',
      },
      headerMode: 'screen',
      headerTintColor: '#afff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <BookMarksStack.Screen
      name="BookMarks"
      component={BookMarksScreen}
      options={{
        title: 'BookMarks',
      
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
           
            <BuildButton></BuildButton>
            <SelectButton></SelectButton>
          </View>
        ),
      }}
    />
  </BookMarksStack.Navigator>
);

const AddProductStackScreen = ({navigation}) => (
  <BookMarksStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'grey',
      },
      headerMode: 'screen',
      headerTintColor: '#afff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <BookMarksStack.Screen
      name="Add Product"
      component={AddScreen}
      options={{
        ...TransitionPresets.FadeFromBottomAndroid,
        title: 'Add Product',
        
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
           
            
          </View>
        ),
      }}
    />
  </BookMarksStack.Navigator>
);

const SelectButton = () => {
  return (
    <AntDesign.Button
      name="select1"
      size={25}
      style={{top: 4}}
      backgroundColor="#0A7328"
      onPress={() => {
        navigation.openDrawer();
      }}></AntDesign.Button>
  );
};

const BuildButton = () => {
  return (
    <AntDesign.Button
      name="bulb1"
      size={25}
      style={{top: 4}}
      backgroundColor="#0A7328"
      onPress={() => {
        navigation.openDrawer();
      }}></AntDesign.Button>
  );
};


const FilterButton = () => {
  return (
    <AntDesign.Button
      name="filter"
      size={30}
      backgroundColor="transparent"
    
      onPress={() => {
        
      }}></AntDesign.Button>
  );
};
