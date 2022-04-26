import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, TextInput, Button, Image, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';
import * as Progress from 'react-native-progress';
import Store from '../Utils';

interface QuizQuestionProps {
	id: string;
	title: string;
	type: 'text' | 'image';
	options: Array<any>;
	registerOption?: Function;
}

interface Quiz {
	title: String;
	questions: Array<QuizQuestionProps>
}


// Active Adventurer
// Q1: I’m a plannerQ2:HikeQ3:Staying ActiveQ4:Walk around the city explorerQ5:Go on a hike to see the sunset

// Party Person
// Q1:I love going with the flowQ2:enjoying_nightlifeQ3:Soaking in the nightlifeQ4:Spend a day relaxing by the pool explorerQ5:Party at that famous club downtown

// Leisure Lover
// Q1:I just want to relaxQ2:SChill_by_poolQ3:chillling with your familyQ4:Spend a day relaxing by the pool explorerQ5:Have a quite day relaxing your loved onesQ6:Go to Disneyland with your family

// Culture Creature
// Q1: I’m a plannerQ2:explore_cityQ3:Soaking in the local cultureQ4:Walk around the city explorerQ5:Take a sightseeing tour around cityQ6:Visit an 18th Century castle which is now a museum

// Avid all-rounder
// Q1:I want to experience it all at least onceQ2:I_want_it_allQ3:Staying ActiveQ4:Walk around the city explorerQ5:Go on a hike to see the sunset

let quiz: Quiz = {
	title: 'Personality Quiz',
	questions: [
		{
			id: 'Q1',
			title: 'What kind of traveler are you?',
			type: 'text',
			options: [`I'm a planner`, `I love going with the flow`, `I want to experience it all at least once`, `I just want to relax`]
		},
		{
			id: 'Q2',
			title: 'Which of these spark joy?',
			type: 'image',
			options: [
				{ path: require('../assets/images/I_want_it_all.jpg'), name: 'I_Want_it_all' },
				{ path: require('../assets/images/Chill_by_pool.jpg'), name: 'Chill_by_pool' },
				{ path: require('../assets/images/enjoy_nightlife.jpg'), name: 'enjoy_nightlife' },
				{ path: require('../assets/images/explore_city.jpg'), name: 'explore_city' },
				{ path: require('../assets/images/Hike.jpg'), name: 'Hike' }
			]
		},
		{
			id: 'Q3',
			title: 'According to you which of the following is important for your travels?',
			type: 'text',
			options: ['Soaking in the local culture', 'Relaxing with the family', 'Soaking in the nightlife', 'Staying active']
		},
		{
			id: 'Q4',
			title: 'Would you rather?',
			type: 'text',
			options: ['Walk around the city exploring', 'Spend a day relaxing by the pool']
		}
	]
}

const Q5A = {
	id: 'Q5',
	title: 'Would you rather?',
	type: 'text',
	options: ['Go on a hike to see the sunset', 'Take a sightseeing tour around the city']
}

const Q5B = {
	id: 'Q5',
	title: 'Would you rather?',
	type: 'text',
	options: ['Having a quiet day relaxing with loved ones', 'Party at that famous club downtown']
}

const Q6 = {
	id: 'Q6',
	title: 'Would you rather?',
	type: 'text',
	options: ['Visit an 18th century castle which is now an art museum', 'Go to disneyland with your family']
}

const Q7 = {
	id: 'Q7',
	title: 'Generally what is the duration of your trips?',
	type: 'text',
	options: ['A long weekend', 'One whole week', 'Two or more weeks']
}

const Q8 = {
	id: 'Q8',
	title: 'Who is generally your travel companion?',
	type: 'text',
	options: ['Travel solo', 'Me and my partner-in-crime', 'Travel time is Family time', 'Exloring the worlds with my friends']
}

let questionCounter = 0;
let result = '';

export default function SignUpQuizScreen({ navigation }: RootStackScreenProps<'SignUpQuiz'>) {
	const cloneQuiz = JSON.parse(JSON.stringify(quiz)); // deep cloning

	const [question, setQuestion] = useState(quiz.questions[questionCounter]);
	let progressUnitValue = (100 / (quiz.questions.length + 2)) / 100;
	const [progress, setProgress] = useState(0);

	const registerOption = (questionId, selectedOption) => {
		try {
			// console.log(`Question: ${questionId}`);
			// console.log(`Selected Option: ${selectedOption}`);
			// console.log(`question counter: ${questionCounter}`);

			result = result + `${questionId}:${selectedOption}`;

			if (questionId === 'Q4' && selectedOption.includes('city')) {
				console.log('contains city')
				quiz.questions.push(Q5A);
				progressUnitValue = (100 / (quiz.questions.length + 2)) / 100;
			} else if (questionId === 'Q4' && selectedOption.includes('pool')) {
				quiz.questions.push(Q5B);
				progressUnitValue = (100 / (quiz.questions.length + 2)) / 100;
			} else if (questionId === 'Q5' && (selectedOption.includes('sightseeing')) || (selectedOption.includes('relaxing'))) {
				quiz.questions.push(Q6);
				progressUnitValue = (100 / (quiz.questions.length + 2)) / 100;
			} else if (questionId === 'Q5' && (selectedOption.includes('sunset') || (selectedOption.includes('downtown')))) {
				quiz.questions.push(Q7);
				progressUnitValue = (100 / (quiz.questions.length + 1)) / 100;
			} else if (questionId === 'Q6') {
				quiz.questions.push(Q7);
				progressUnitValue = (100 / (quiz.questions.length + 1)) / 100;
			} else if (questionId === 'Q7') {
				quiz.questions.push(Q8);
				progressUnitValue = (100 / quiz.questions.length) / 100;
			}



			// console.log(quiz.questions);
			questionCounter = questionCounter + 1;
			console.log(questionCounter);
			if (questionCounter < quiz.questions.length) {
				setQuestion(quiz.questions[questionCounter]);
				setProgress(currValue => currValue + progressUnitValue);
			}
			else {
				console.log(result);
				const personality = calculatePersonality(result);

				Store.setData({ personality }).then((value) => {
					questionCounter = 0;
					delete quiz['questions'];
					quiz['questions'] = cloneQuiz.questions;
					navigation.replace('QuizResult', { personality });
				}).catch((e) => {

				})
				// store in localstorage				
				// setProgress(currValue => currValue + progressUnitValue);
			}
		} catch (e) {

		}
	}

	return (
		<ImageBackground source={require('../assets/images/FullScreenBG.png')} style={styles.container}>
			<View style={{ marginVertical: 30 }}>
				<Progress.Bar progress={progress} width={345} color={Colors.primary} unfilledColor='#FDC1C1' height={10} />
			</View>

			<QuizQuestion id={question.id} title={question.title} type={question.type} options={question.options} registerOption={registerOption} />
			{/* <Button title='Show Result' onPress={() => console.log(result) }></Button> */}
			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</ImageBackground>
	)
}

const calculatePersonality = (result: string) => {
	let personality = '';

	const personalityMap: Object = {
		activeadventure: `Q1:I'm a plannerQ2:HikeQ3:Staying activeQ4:Walk around the city exploringQ5:Go on a hike to see the sunset`,
		partyperson: 'Q1:I love going with the flowQ2:enjoy_nightlifeQ3:Soaking in the nightlifeQ4:Spend a day relaxing by the poolQ5:Party at that famous club downtown',
		leisurelover: 'Q1:I just want to relaxQ2:Chill_by_poolQ3:Relaxing with the familyQ4:Spend a day relaxing by the poolQ5:Having a quiet day relaxing with loved onesQ6:Go to disneyland with your family',
		culturecreature: `Q1:I'm a plannerQ2:explore_cityQ3:Soaking in the local cultureQ4:Walk around the city exploringQ5:Take a sightseeing tour around the cityQ6:Visit an 18th century castle which is now an art museum`,
		avidallrounder: 'Q1:I want to experience it all at least onceQ2:I_Want_it_allQ3:Staying activeQ4:Walk around the city exploringQ5:Go on a hike to see the sunset',
	};

	console.log(result);

	for (const [key, value] of Object.entries(personalityMap)) {
		if (result.includes(value)) {
			personality = key;
			break;
		}
	}

	console.log('inside calculate ' + personality);
	// return personality;
	return personality;
};

const QuizQuestion = (props: QuizQuestionProps) => {

	function renderQuestion(question: QuizQuestionProps) {
		if (question.type === 'text') {
			return (
				<View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: 'transparent' }}>
					{
						props.options.map((option, index) => {
							return (
								<View key={index} style={{ width: 272, height: 72, alignItems: 'center', justifyContent: 'center', borderRadius: 13, backgroundColor: Colors.primary, marginBottom: 20 }}>
									<TouchableOpacity onPress={() => props.registerOption(props.id, option)} style={{ width: 272, height: 72, justifyContent: 'center' }}>
										<Text style={{ color: 'black', textAlign: 'center', fontSize: 18, color: '#fff' }}>{option}</Text>
									</TouchableOpacity>
								</View>
							)
						})
					}
				</View>
			)
		} else if (question.type === 'image') {
			return (
				<View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'transparent', flexWrap: 'wrap' }}>
					{
						props.options.map((option, index) => {
							return (
								<View key={index} style={{ width: 144, height: 148, borderRadius: 13, backgroundColor: Colors.primary, display: 'block', marginVertical: 15, overflow: 'hidden' }}>
									<TouchableOpacity onPress={() => props.registerOption(props.id, option.name)}>
										<Image source={option.path} progressiveRenderingEnabled={true} resizeMode={'stretch'} style={styles.thumb}></Image>
									</TouchableOpacity>
								</View>
							)
						})
					}
				</View>
			)
		}
	}

	return (
		<View style={{ backgroundColor: 'transparent' }}>
			<Text style={styles.questionTitle}>{props.title}</Text>
			<View style={{ backgroundColor: 'transparent' }}>
				{
					renderQuestion(props)
				}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 50
	},
	thumb: {
		width: 144,
		height: 148
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
		backgroundColor: '#625B39',
		borderRadius: 12,
		paddingVertical: 21,
		paddingHorizontal: 131,
	},
	newAccountButton: {
		backgroundColor: '#3C3A40',
		borderRadius: 12,
		paddingVertical: 21,
		paddingHorizontal: 81,
	},
	textInput: {
		color: '#96A7AF',
		width: '80%',
		fontSize: 18,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#979797',
	},
	questionTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		color: Colors.primary,
		textAlign: 'center',
		backgroundColor: 'transparent',
		marginTop: 60,
		marginBottom: 40,
		padding: 20
	}
});