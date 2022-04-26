import { RootStackScreenProps } from "../types";
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Dimensions, Platform, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Text, View, Button } from '../components/Themed';
import Colors from '../constants/Colors';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function SignUpIntroScreen({ navigation }: RootStackScreenProps<'SignUpIntro'>) {
	let width = Dimensions.get('window').width; //full width
	let height = Dimensions.get('window').height; //full height
	return (
		<ImageBackground source={require('../assets/images/FullScreenBG.png')} style={styles.container}>
			<Text style={{ fontSize: 28, fontWeight: '900', marginTop: 50 }}>Create Account</Text>
			<View style={{ width: 325, marginTop: 155 }}>
				<TextInput style={styles.textInput} placeholder={`What's your name?`} placeholderTextColor='#333' textAlign='left' />
				<TextInput style={styles.textInput} placeholder='Email' placeholderTextColor='#333' textAlign='left' />
				<TextInput style={styles.textInput} placeholder='Password' placeholderTextColor='#333' textAlign='left' />
				<TextInput style={styles.textInput} placeholder='Confirm Password' placeholderTextColor='#333' textAlign='left' />
				<Button onPress={() => navigation.replace('SignUpStartQuiz')} style={{ fontSize: 20 }}>Sign up</Button>
				<TouchableOpacity onPress={() => navigation.replace('Login')}>
					<Text style={{ color: '#333', textAlign: 'center', fontSize: 12, marginTop: 16 }}>Already have an account? Log in</Text>
				</TouchableOpacity>
			</View>
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
		fontFamily: 'Montserrat_400Regular',
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
})