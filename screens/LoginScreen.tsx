import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Dimensions, Platform, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Button, Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  let width = Dimensions.get('window').width; //full width
  let height = Dimensions.get('window').height; //full height

  return (
    <ImageBackground source={require('../assets/images/FullScreenBG.png')} style={styles.container}>
      <Text style={{ fontSize: 28, fontWeight: '900', marginTop: 50 }}>Log in</Text>
      <View style={{ marginTop: 35, width: '100%', flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <FontAwesome.Button name="facebook" style={{ fontSize: 24, width: 155, height: 50, justifyContent: 'center' }} borderRadius={18} iconStyle={{ fontSize: 24 }} backgroundColor={Colors.primary}>
          Facebook
        </FontAwesome.Button>
        <FontAwesome.Button name="twitter" style={{ fontSize: 24, width: 155, height: 50, justifyContent: 'center' }} borderRadius={18} iconStyle={{ fontSize: 24 }} backgroundColor={Colors.primary}>
          Twitter
        </FontAwesome.Button>
      </View>
      <View style={{ width: 325, marginTop: 55 }}>
        <TextInput style={styles.textInput} placeholder='Email' placeholderTextColor='#333' textAlign='left' />
        <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor='#333' textAlign='left' />
        <Text style={{ color: '#333', textAlign: 'right', fontSize: 12, marginBottom: 20 }}>Forgot Password?</Text>
        <Button style={{ fontSize: 20 }}>Log in</Button>
        <TouchableOpacity onPress={() => navigation.replace('SignUpIntro')}>
          <Text style={{ color: '#333', textAlign: 'center', fontSize: 16, marginTop: 116 }}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.panel}>
        <TextInput style={styles.textInput} placeholder='Email' placeholderTextColor='#333' textAlign='left' />
        <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor='#333' textAlign='left' />
        <Text style={{ color: '#333', textAlign: 'right', fontSize: 12 }}>Forgot Password?</Text>

        <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.loginButton}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('SignUpIntro')}>
          <Text style={{ color: '#333', textAlign: 'center', fontSize: 16, marginTop: 16 }}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
        <Text style={{ color: '#777', textAlign: 'center', fontSize: 14, marginTop: 16 }}> ⎯⎯⎯⎯⎯⎯⎯⎯⎯ OR ⎯⎯⎯⎯⎯⎯⎯⎯</Text>
        <View style={{ marginTop: 15, width: '100%', flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-around', alignItems: 'center' }}>
          <FontAwesome5 name="google" size={24} color="red" />
          <FontAwesome5 name="facebook-square" size={24} color="#3b5988" />
          <FontAwesome5 name="twitter" size={24} color="#1DA1F2" />
          <FontAwesome5 name="instagram-square" size={24} color="#C13584" />
        </View>
      </View> */}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  loginButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  newAccountButton: {
    backgroundColor: '#3C3A40',
    borderRadius: 12,
    paddingVertical: 21,
    paddingHorizontal: 81,
  },
  textInput: {
    color: '#96A7AF',
    width: '100%',
    fontSize: 16,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#143F6B',
    paddingHorizontal: 20,
    marginBottom: 15
  },
  panel: {
    backgroundColor: '#fff',
    width: 320,
    borderRadius: 12,
    padding: 20
  }
});