import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ListScreen = ({navigation}) => {
    return (
       
        <View style={styles.container}>
            <Text>Test </Text>
            
        </View>
    );
};


export default ListScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

