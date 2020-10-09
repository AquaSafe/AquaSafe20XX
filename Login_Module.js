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
  Image 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WelcomeScreen from './Welcome_Screen';


const appColors = {
    trueBack: '#385BA6',
    background: '#85AEF1',
    darkAccent: '#525C82',
    titleDark: '#2E3652',
    titleBright: '#F5F7FF',
    fadeBleach: '#EFF2F8',
    bleach: '#FFFFFF',
    blueAccent: '#466EC3',
    wallDark: '#233865'
  };

const styles = StyleSheet.create({
    screenSpace: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: appColors.trueBack,        
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 250,
        width: '80%',
        height: '40%',
        zIndex: 2,
    },
    textField: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        width: '65%',
        borderRadius:100,
        backgroundColor: appColors.bleach,
    },
    text: {
        fontSize: 25,
        fontWeight: '800'
    },
    image: {
        flex: 1,
        position: 'absolute',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    }
})

const Login_Module = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.screenSpace}>
          <ImageBackground style={styles.image} source={require('./assets/wallpp.png')}>
            <View style={styles.container}>
            </View>
            <View style={styles.container}>
            </View>
                <View style={[styles.container, {marginBottom: '140%'}]}>
                    <View style={styles.textField}>
                        <Text style={[styles.text, {color: appColors.wallDark}]}>Login</Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={{
                width: '100%',
                height: '80%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
            }}>
                <View style={[styles.textField, {width: '80%', height: 60, opacity: .1}]}></View>
                <View style={[styles.textField, {width: '80%', height: 60, opacity: .1, marginTop: 50}]}></View>
            </View>

            <View style={{
                width: '80%',
                height: '80%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'absolute',
            }}>
                <View style={[styles.textField, {width: '21%', height: 70, borderRadius: 10000}]}></View>
                <View style={[styles.textField, {width: '21%', height: 70, borderRadius: 10000, marginTop: 40}]}></View>
            </View>

            <View style={{
                width: '100%',
                height: '80%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
            }}>
                <Text style={[styles.text, {marginBottom: '80%', color: appColors.bleach, fontSize: 50}]}>User Login</Text>
            </View>

            <View style={{
                marginTop: '25%',
                width: '90%',
                height: '100%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Image source={require('./assets/returnLight.png')} style={{
                        width: 60,
                        height: 50
                    }}>
                    </Image>
                </TouchableOpacity> 
            </View>
        </View>
    );
}


export default Login_Module;