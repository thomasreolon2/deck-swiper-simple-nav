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
} from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';
import favoritedata from '../favoritedata';

const BookMarksScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={favoritedata}
        renderItem={({item}) => (
          <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
              <TouchableOpacity>
            <Image style={styles.imageThumbnail} source={{uri: item.image}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.userTouchableUser}>
                    <Image source={{uri: item.userPic}} style={styles.userCardImage} />
                 </TouchableOpacity>
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, id) => id}
      />
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
    // resizeMode: 'contain'
    justifyContent: 'space-evenly',
    marginLeft: 10,
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
    width: 50,
    height: 50,
    borderRadius: 50,
    // backgroundColor: 'transparent',
    // overflow: "hidden",
  },
  userTouchableUser: {
    position: 'absolute',
    top: 5,
    left:2,

    alignItems: 'flex-start',
    flex: 1,

    marginLeft: 5,
    marginRight: 5,

    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',

    width: 53,
    height: 53,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});
