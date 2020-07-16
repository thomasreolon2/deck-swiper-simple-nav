import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const AddScreen = ({navigation}) => {
    
        const [value, onChangeText] = React.useState('Useless Placeholder');

        
    return (
       
        <View style={styles.container}>
      
              
        </View>
    );
};


export default AddScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

