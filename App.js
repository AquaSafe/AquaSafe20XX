/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
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
  Alert
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();

const App = () /*=> React$Node = ()*/ => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeText = useRef(new Animated.Value(0)).current

  Animated.timing( //main background
    fadeAnim,
     {
       toValue: 1,
       delay: 500,
       duration: 1800,
       useNativeDriver: true
     }
   ).start()

   Animated.timing( //text and buttons
    fadeText,
     {
       toValue: 1,
       delay: 2450,
       duration: 800,
       useNativeDriver: true
     }
   ).start()

   const WelcomeScreen = ({navigation}) => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
          <View style={styles.mainContainer}>
            <View style={styles.background}>
              <Animated.Image source = {require('./assets/Aqusafehome.png')} style={{position: 'absolute', width: '100%', height: '100%', opacity: fadeAnim,}}/>
              <Animated.Text 
                style={{
                  fontSize: 60, 
                  fontWeight: '700', 
                  paddingTop: 300, 
                  color: appColors.bleach,
                  textShadowColor: appColors.darkAccent,
                  textShadowOffset: {width: 5, height: 3},
                  textShadowRadius: 0, 
                  opacity: fadeText}}>
                AquaSafe
              </Animated.Text>
            </View>
            <View style={styles.textBlock}>
              <Animated.View 
                  style={{
                    opacity: fadeText,
                    paddingTop: 600
                  }}>
                    <TouchableOpacity style={styles.buttonBlock} 
                      onPress={() => 
                        navigation.navigate('Registration')
                      }>
                      <Text style={styles.textBlock}>Sign in</Text>
                    </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
      </>
      );
   }

   const LoginScreen = () => {
     return(
       <Text>This stack is still being developed. Login is currently disabled</Text>
     )
   }

   return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen //Welcome Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen //sign in/up
          name="Registration"
          component={LoginScreen}
          options={{title: 'Login or Register'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
};



const appColors = {
  background: '#85AEF1',
  darkAccent: '#525C82',
  titleDark: '#2E3652',
  titleBright: '#F5F7FF',
  bleach: '#FFFFFF'
}

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
    height: '100%'
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
  }
});

export default App;