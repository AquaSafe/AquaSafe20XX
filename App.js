/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login_Module from './Login_Module';
import Welcome_Screen from './Welcome_Screen';
//CODE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Stack = createStackNavigator();

const App = () /*=> React$Node = ()*/ => {
  const WelcomeScreen = ({navigation}) => {
    return <Welcome_Screen />;
  };
  const LoginScreen = () => {
    return <Login_Module />;
  };

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
          options={{title: 'Login or Register', headerShown: false}}
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
  bleach: '#FFFFFF',
  blueAccent: '#466EC3',
};

const loginStyles = StyleSheet.create({});

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

export default App;
