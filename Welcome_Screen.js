import 'react-native-gesture-handler';
import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Button,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Login_Module from './Login_Module';

const appColors = {
  trueBack: '#385BA6',
  background: '#85AEF1',
  darkAccent: '#525C82',
  titleDark: '#2E3652',
  titleBright: '#F5F7FF',
  fadeBleach: '#EFF2F8',
  bleach: '#FFFFFF',
  blueAccent: '#466EC3',
  wallDark: '#233865',
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: '#385BA6',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  textBlock: {
    fontSize: 25,
    fontWeight: '400',
    textShadowColor: appColors.darkAccent,
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 4,
    alignContent: 'center',
    justifyContent: 'center',

    color: appColors.bleach,
  },
  buttonBlock: {
    fontSize: 25,
    fontWeight: '300',
    height: 60,
    alignContent: 'center',
    justifyContent: 'center',

    color: appColors.bleach,
  },
});

const Welcome_Screen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeText = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  Animated.timing(
    //main background
    fadeAnim,
    {
      toValue: 1,
      delay: 500,
      duration: 1800,
      useNativeDriver: true,
    },
  ).start();

  Animated.timing(
    //text and buttons
    fadeText,
    {
      toValue: 1,
      delay: 2450,
      duration: 800,
      useNativeDriver: true,
    },
  ).start();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.mainContainer}>
        <View style={styles.background}>
          <Animated.Image
            source={require('./assets/AQLogo_blue-white.png')}
            style={{
              //position: 'absolute',
              width: '70%',
              height: '33%',
              marginBottom: -250,
              opacity: fadeAnim,
              resizeMode: 'contain',
            }}
          />
          <Animated.Text
            style={{
              fontSize: 60,
              fontWeight: '700',
              paddingTop: 300,
              color: appColors.bleach,
              textShadowColor: appColors.blueAccent,
              textShadowOffset: {width: 5, height: 3},
              textShadowRadius: 0,
              opacity: fadeText,
            }}>
            AquaSafe
          </Animated.Text>
        </View>
        <View style={styles.textBlock}>
          <Animated.View
            style={{
              opacity: fadeText,
              paddingTop: 600,
            }}>
            <TouchableOpacity
              style={styles.buttonBlock}
              onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.textBlock}>Sign in</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </>
  );
};

export default Welcome_Screen;
