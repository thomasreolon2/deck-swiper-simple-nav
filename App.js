import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MainTabScreen from './screens/MainTabScreen';
import SearchScreen from './screens/SearchScreen';

import {DrawerContent} from './screens/DrawerContent';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';

import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SearchStack" component={SearchScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
