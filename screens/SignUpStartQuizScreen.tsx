import { RootStackScreenProps } from "../types";
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Dimensions, Platform, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Button, Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function SignUpStartQuiz({ navigation }: RootStackScreenProps<'SignUpStartQuiz'>) {
	let width = Dimensions.get('window').width; //full width
	let height = Dimensions.get('window').height; //full height
	return (
		<ImageBackground source={require('../assets/images/FullScreenBG.png')} style={styles.container}>
			<View style={styles.panel}>
				<Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10, color: '#444', marginVertical: 30, textAlign: 'center' }}>Hey Nikita!</Text>
				<Text style={{ color: '#444', fontSize: 16, fontFamily: 'Montserrat_400Regular', fontWeight: '200', textAlign: 'center', lineHeight: 24, letterSpacing: 1, marginVertical: 20 }}>
					We are almost done with setting up your account. To be able to make better recommendations for your travels, we need you to take a short quiz.
					This quiz will help us understand your trave personality and suggest you places that are best suited for you! Trust us, this won’t take long and will be a fun experience for you!
				</Text>
				<Button style={{ fontFamily: 'Montserrat_500Medium' }} onPress={() => navigation.replace('SignUpQuiz')}>Sign up</Button>
				<TouchableOpacity onPress={() => navigation.replace('Login')}>
					<Text style={{ color: '#555', textAlign: 'center', fontSize: 12, marginTop: 16 }}>Skip for now</Text>
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