import 'react-native-gesture-handler';
import React, {useRef, useEffect, useState} from 'react';
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
  TextInput,
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
    userInput: {

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

const emailInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        clearTextOnFocus={true}
      />
    );
  }

const Login_Module = () => {
    const navigation = useNavigation();
    const [evalue, eonChangeText] = useState('Enter your email');
    const [pvalue, ponChangeText] = useState('Enter your password');
    //secure and setSecure are used to update a password or any textinput's component to make the text hidden onFocus.
    const [secure, setSecure] = useState(false)

    return (
        // main container
        <View style={styles.screenSpace}>
            {/* background */}
            <ImageBackground style={styles.image} source={require('./assets/wallpp.png')}>
                <View style={styles.container}>
                </View>
                <View style={styles.container}>
                </View>
                
            </ImageBackground>

            
            {/* field icons */}
            <View style={{
                width: '80%',
                height: '80%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'absolute',
            }}>
                <View style={[styles.textField, {width: '21%', height: 70, borderRadius: 10000, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '37.2%'}]}>
                    <Image source={require('./assets/mail-512-dark.png')} style={{
                        width: '50%',
                        height: '50%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    </Image>
                </View>
                <View style={[styles.textField, {width: '21%', height: 70, borderRadius: 10000, marginTop: 40, top: '5%'}]}>
                    <Image source={require('./assets/passlock-dark.png')} style={{
                        width: '50%',
                        height: '50%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    </Image>
                </View>
            </View>
            
            {/* title */}
            <View style={{
                width: '100%',
                height: '80%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
            }}>
                <Text style={[styles.text, {marginBottom: '80%', color: appColors.bleach, fontSize: 50}]}>User Login</Text>
            </View>

            {/* Back button */}
            <View style={{
                width: '90%',
                height: '100%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                position: 'absolute'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Image source={require('./assets/returnLight.png')} style={{
                        top: '80%',
                        width: 60,
                        height: 50
                    }}>
                    </Image>
                </TouchableOpacity> 
            </View>
            
            {/* Input fields */}
            <View style={{
                width: '100%',
                height: '80%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
            }}>
                <View style={[styles.textField, {width: '80%', height: 60, opacity: .1, justifyContent: 'flex-start', flexDirection: 'row-reverse', position: 'absolute', top: '38%'}]}>
                </View>
                <View style={[styles.textField, {width: '80%', height: 60, opacity: .1, top: '7.8%'}]}></View>
                {/* Email */}
                <TextInput 
                        style={{start: '28%', right: '2%', width: '60%', fontSize: 25, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 10, opacity: 1, position: 'absolute', top: '40%', color: appColors.bleach, flexDirection: 'row-reverse'}} 
                        onChangeText={text => eonChangeText(text)} 
                        value={evalue} 
                        editable={true}
                        clearTextOnFocus={true}
                    />
                {/* Password */}
                <TextInput 
                        style={{start: '28%', right: '2%', width: '60%', fontSize: 25, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 10, opacity: 1, position: 'absolute', top: '55.5%', color: appColors.bleach, flexDirection: 'row-reverse'}} 
                        onChangeText={text => ponChangeText(text)} 
                        value={pvalue} 
                        editable={true}
                        clearTextOnFocus={true}
                        secureTextEntry={secure}
                        onFocus={() => {setSecure(true)}}
                    />
            </View>
            
            {/* Login button */}
            <View style={{
                position: 'absolute',
                justifyContent: 'flex-start',
                alignItems: 'center',
                top: '65%',
                height: '100%',
                width: '100%',
                
            }}>
                <TouchableOpacity style={[styles.container, {width: '45%', height: '6.5%'}]} onPress={() => Alert.alert('Login integration has not been implemented')}>
                    <View style={[styles.textField, {width: '100%', height: '100%'}]}>
                        <Text style={[styles.text, {color: appColors.wallDark}]}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Login_Module;