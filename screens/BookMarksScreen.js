import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
  Slider,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { FlatList } from 'react-native-gesture-handler';
import favoritedata from '../favoritedata';



const BookMarksScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>

    </View>
  );
};

export default BookMarksScreen;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },

  imageThumbnail: {
    //resizeMode: 'contain',
    justifyContent: 'space-evenly',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'center',
    height: 300,
    flex: 0.45,
    //shadow
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,
    //shadow
    backgroundColor: 'white',
    top: -20,
  },
  title: {
    fontSize: 32,
  },
  userCardImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    // backgroundColor: 'transparent',
    // overflow: "hidden",
  },
  userTouchableUser: {
    position: 'absolute',

    alignItems: 'flex-start',
    flex: 1,

    marginLeft: 5,
    marginRight: 5,

    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',

    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});
