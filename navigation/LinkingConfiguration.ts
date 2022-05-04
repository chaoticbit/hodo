/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'login',
      SignUpQuiz: 'signUpQuiz',
      SignUpIntro: 'signUpIntro',
      SignUpStartQuiz: 'signUpStartQuiz',
      QuizResult: 'quizResult',
      RecommendMyTrip: 'recommendMyTrip',
      RecommendedResults: 'recommendedResults',
      Landing: 'landing',
      OnboardingFlow: 'onboardingFlow',
      PlaceDetail: 'placeDetail',
      EditProfile: 'editProfile',
      PersonalityEdit: 'personalityEdit',
      MyTripsDetail: 'myTripsDetail',
      Home: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'three'
            }
          },
          TabFour: {
            screens: {
              TabFourScreen: 'four'
            }
          }
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
