import React from 'react';
import { View, Text, Button, Slider, StyleSheet } from 'react-native';

const HistoryScreen = ({ navigation }) => {

  state = {
    maxValue: 100,
    value: 50,
    minValue: 1

  }

  return (

    <View style={styles.container}>
      <Text>Test </Text>
      <Slider

        minimumValue={this.state.minValue}
        value={this.state.value}
        maximumValue={this.state.maxValue}
        step={1} // setting this below 1 se
        //style={{ width: 300}}
        onValueChange={value => {
          clearTimeout(this.sliderTimeoutId)
          this.sliderTimeoutId = setTimeout(() => {
            this.setState({ value })
          }, 100)
        }}
        thumbTintColor='rgb(252, 228, 149)'
        maximumTrackTintColor='#d3d3d3'
        minimumTrackTintColor='rgb(252, 228, 149)'


      />
    </View>
  );
};


export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCon: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  colorGrey: {
    color: '#d3d3d3'
  },
  colorYellow: {
    color: 'rgb(252, 228, 149)'
  }
});

