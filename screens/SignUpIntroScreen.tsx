import { RootStackScreenProps } from "../types";
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Dimensions, Platform, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 

export default function SignUpIntroScreen({ navigation } : RootStackScreenProps<'SignUpIntro'>) {
	let width = Dimensions.get('window').width; //full width
	let height = Dimensions.get('window').height; //full height
	return (
		<ImageBackground source={require('../assets/images/BG.png')} style={styles.container} blurRadius={4}>
			<View style={{top: 0, backgroundColor: '#000', position: 'absolute', width: width, height: height, opacity: 0.4}}></View>
			<Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10, color: '#fff'}}>Hey Traveler!</Text>
			<Text style={{fontSize: 20, fontWeight: '500', marginBottom: 60, color: '#fff'}}>Let's get your account all set up!</Text>
			<View style={styles.panel}>
				<TextInput style={styles.textInput} placeholder={`What's your name?`} placeholderTextColor='#333' textAlign='left' />
				<TextInput style={styles.textInput} placeholder='Email' placeholderTextColor='#333' textAlign='left' />
				<TextInput style={styles.textInput} placeholder='Password' placeholderTextColor='#333' textAlign='left' />
				<TextInput style={styles.textInput} placeholder='Confirm Password' placeholderTextColor='#333' textAlign='left' />
				<TouchableOpacity onPress={() => navigation.replace('SignUpStartQuiz')} style={styles.loginButton}>
					<Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>Sign Up</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.replace('Root')}>
					<Text style={{color: '#333', textAlign: 'center', fontSize: 12, marginTop: 16}}>Already have an account? Log in</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',        
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
			marginBottom: 18
	},
	panel: {
		backgroundColor: '#fff',
		width: 320,
		borderRadius: 12,
		padding: 20
	}
})