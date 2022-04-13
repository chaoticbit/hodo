import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Dimensions, Platform, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 

export default function LoginScreen({ navigation } : RootStackScreenProps<'Login'>) {
	let width = Dimensions.get('window').width; //full width
	let height = Dimensions.get('window').height; //full height

	return (      
		<ImageBackground source={require('../assets/images/BG.png')} style={styles.container} blurRadius={4}>
			<View style={{top: 0, backgroundColor: '#000', position: 'absolute', width: width, height: height, opacity: 0.4}}></View>
			<View style={styles.panel}>
				<TextInput style={styles.textInput} placeholder='Email' placeholderTextColor='#333' textAlign='left' />
				<TextInput style={styles.textInput} placeholder='Password' placeholderTextColor='#333' textAlign='left' />
				<Text style={{color: '#333', textAlign: 'right', fontSize: 12}}>Forgot Password?</Text>

				<TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.loginButton}>
					<Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>Log in</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.replace('SignUpIntro')}>
					<Text style={{color: '#333', textAlign: 'center', fontSize: 16, marginTop: 16}}>Don't have an account? Sign up</Text>
				</TouchableOpacity>
				<Text style={{color: '#777', textAlign: 'center', fontSize: 14, marginTop: 16}}> ⎯⎯⎯⎯⎯⎯⎯⎯⎯ OR ⎯⎯⎯⎯⎯⎯⎯⎯</Text>
				<View style={{marginTop: 15, width: '100%', flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-around', alignItems: 'center'}}>
					<FontAwesome5 name="google" size={24} color="red" />
					<FontAwesome5 name="facebook-square" size={24} color="#3b5988" />
					<FontAwesome5 name="twitter" size={24} color="#1DA1F2" />
					<FontAwesome5 name="instagram-square" size={24} color="#C13584" />
				</View>
			</View>          
			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</ImageBackground>               
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',        
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
      backgroundColor: '#FEBD2F',
      borderRadius: 12,
      paddingVertical: 14,
      marginTop: 14      
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
      fontSize: 18,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#979797',
      marginBottom: 10
  },
  panel: {
    backgroundColor: '#fff',
    width: 320,
    borderRadius: 12,
    padding: 20
  }
});