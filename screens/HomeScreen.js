import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import data from '../data';
import favoritedata from '../favoritedata';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Transitioning, Transition } from 'react-native-reanimated';

const colors = {
  red: '#ec2579',
  blue: '#0070ff',
  gray: '#777777',
  green: '#12BC4D',
  black: '#000000',
  white: '#ffffff',
  yellow: '#E1D325',
  turquoise: '#40e0d0',
};

console.disableYellowBox = true;

const ANIMATION_DURATION = 200;
const transition = (
  <Transition.Sequence>
    <Transition.Out
      type="slide-bottom"
      durationMs={ANIMATION_DURATION}
      interpolation="easeIn"
    />
    <Transition.Together>
      <Transition.In
        type="fade"
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
      />
      <Transition.In
        type="slide-bottom"
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
        interpolation="easeOut"
      />
    </Transition.Together>
  </Transition.Sequence>
);

const { width } = Dimensions.get('window');
const swiperRef = React.createRef();
const transitionRef = React.createRef();

const Card = ({ card }) => (
  <View style={styles.card}>
    <Image source={{ uri: card.image }} style={styles.cardImage} />

    <TouchableOpacity style={styles.userTouchableUser}>
      <Image source={{ uri: card.userPic }} style={styles.userCardImage} />
    </TouchableOpacity>
  </View>
);

const CardDetails = ({ index }) => (
  <View key={data[index].id} style={{ alignItems: 'center' }}>
    <Text style={[styles.text, styles.title]} numberOfLines={2}>
      {data[index].title}
    </Text>
    <Text style={[styles.text, styles.price]}>{data[index].price}</Text>
  </View>
);

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [favoritedata, setFavoriteItem] = React.useState([]);

  const onSwiped = () => {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
  };

  const onSwipedTop = (index) => {


    setFavoriteItem([...favoritedata, {

      id: data[index].id,
      price: data[index].price,
      title: data[index].title,
      userPic: data[index].userPic,
      image: data[index].image

    }])

  };

  const addItem = event => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName
      }
    ]);
    setItemName("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}></View>

      <Swiper
        renderCard={(card) => <Card card={card} />}
        ref={swiperRef}
        cards={data}
        cardIndex={index}
        onSwiped={onSwiped}
        onSwipedTop={onSwipedTop}
        stackSize={4}
        stackScale={10}
        stackSeparation={14}
        infinite //add searching animation when index = 0.
        disableBottomSwipe
        backgroundColor={'transparent'}
        animateOverlaysLabelsOpacity
        animateCardOpacity
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: colors.red,
                borderColor: colors.red,
                color: colors.white,
                borderWidth: 1,
                fontSize: 24,
              },
              wrapper: {
                flexDirection: 'column',
                zIndex: 3,
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: -20,
                marginLeft: 90,
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: colors.blue,
                borderColor: colors.blue,
                color: colors.white,
                borderWidth: 1,
                fontSize: 24,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: -21,
                marginLeft: -79,
                zIndex: 3,
              },
            },
          },
          top: {
            title: 'FAVORITE',
            style: {
              label: {
                backgroundColor: colors.green,
                borderColor: colors.green,
                color: colors.white,
                borderWidth: 1,
                fontSize: 24,
              },
              wrapper: {
                //flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                top: -15,

                zIndex: 3,
              },
            },
          },
        }}
      />
      <View style={styles.bottomContainer}>
        <Transitioning.View ref={transitionRef} transition={transition} />
        <CardDetails index={index} />

        <View style={styles.bottomButtonContainer}>
         
          <Ionicons.Button
            name="chatbubbles-outline"
            size={40}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.3}
            color={colors.green}
            onPress={() => {
              swipeMessage();
            }}
          />
           <Ionicons.Button
            name="ios-thumbs-down"
            size={55}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.3}
            color={colors.red}
            onPress={() => swiperRef.current.swipeLeft()}
          />
          <Ionicons.Button
            name="ios-thumbs-up"
            size={55}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.3}
            color={colors.blue}
            onPress={() => swiperRef.current.swipeRight()}
          />
          <Ionicons.Button
            name="ios-pricetags-outline"
            size={40}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.3}
            color={colors.yellow}
            onPress={() => { }}
          />
          
        </View>
      </View>
    </View>
  );
};

const swipeMessage = () => (
  console.log('swipeMessage Working'),
  Alert.alert(
    'Send message to owner',
    'You are not a member you can become a member now and get access to new features!',
    [
      {
        text: 'Become a member',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false },
  )
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  card: {
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    top: -30,
    zIndex: 1,
  },
  cardImage: {
    width: 300,
    flex: 1,
    resizeMode: 'contain',
  },
  userTouchableUser: {
    position: 'absolute',
    top: 5,
    left: 2,
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
  userCardImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // backgroundColor: 'transparent',
    // overflow: "hidden",
  },

  swiperContainer: {
    flex: 0.55,
  },
  bottomContainer: {
    marginTop: 40,
    backgroundColor: 'transparent',
    // top: 15,
    justifyContent: 'space-evenly',
    flex: 0.45,
  },
  cardDetails: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Courier',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    color: colors.gray,
  },
  price: {
    color: colors.blue,
    fontSize: 32,
    fontWeight: '500',
    fontFamily: 'Courier',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom: 10,
  },
});
