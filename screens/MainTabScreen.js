import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import DetailsScreen from './DetailsScreen';
import HistoryScreen from './HistoryScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const CartStack = createStackNavigator();
const HistoryStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {

    return(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );

}

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (

    <HomeStack.Navigator screenOptions={{
    
    headerStyle: {
    
      backgroundColor: '#009387',
    },
    
    headerTintColor: '#afff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      alignSelf:'center',
      flexGrow:1,
      
    }
    }}>
    
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          
          headerRight: () => (
          <View style={{padding:6}}></View> 
          ),
    
          headerLeft: () => (
    
            <MaterialCommunityIcons.Button name="menu" size={30}
            backgroundColor="#009387" onPress={() => {navigation.openDrawer()}} style= {{ paddingLeft: 16}}>
    
    
           
            </MaterialCommunityIcons.Button>
    
          )
          }}/>
    
    </HomeStack.Navigator>
    
    );
    
    const DetailsStackScreen = ({navigation}) => (
    
    <DetailsStack.Navigator screenOptions={{
    
    headerStyle: {
    
      backgroundColor: '#009387',
    }, 
    headerMode: 'screen',
    headerTintColor: '#afff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
    }}>
    
        <DetailsStack.Screen name="Home" component={DetailsScreen} options={{
          title: 'Details',
          
          }}/>
    
    </DetailsStack.Navigator>
    
    );