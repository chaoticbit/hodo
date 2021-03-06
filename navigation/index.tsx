/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';

import LoginScreen from '../screens/LoginScreen';
import SignUpQuizScreen from '../screens/SignUpQuizScreen';
import SignUpIntroScreen from '../screens/SignUpIntroScreen';
import SignUpStartQuizScreen from '../screens/SignUpStartQuizScreen';
import QuizResultScreen from '../screens/QuizResultScreen';
import RecommendedResultsScreen from '../screens/RecommendedResultsScreen';

import { RootStackParamList, RootStackScreenProps, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import RecommendMyTripScreen from '../screens/RecommendMyTripScreen';
import OnboardingFlowScreen from '../screens/OnboardingFlowScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PersonalityEditScreen from '../screens/PersonalityEditScreen';
import MyTripsDetailScreen from '../screens/MyTripsDetailScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={OnboardingFlowScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="SignUpIntro" component={SignUpIntroScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpQuiz" component={SignUpQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpStartQuiz" component={SignUpStartQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuizResult" component={QuizResultScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ presentation: 'modal', headerShown: false }} />
      <Stack.Screen name="PersonalityEdit" component={PersonalityEditScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MyTripsDetail" component={MyTripsDetailScreen} options={{ headerShown: false }} />

      <Stack.Screen name="RecommendedResults" component={RecommendedResultsScreen} options={{
        headerShown: false,
        headerTitle: 'Recommend my trip',
        headerTransparent: true,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#32354B',
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: 20,
        },
        headerShadowVisible: false,
        headerBackTitle: 'Back'
      }} />
      <Stack.Screen name="RecommendMyTrip" component={RecommendMyTripScreen} options={{
        headerShown: true,
        headerTitle: 'Recommend my trip',
        headerTransparent: false,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#32354B',
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: 20,
        },
        headerShadowVisible: false,
        headerBackTitle: 'Back'
      }} />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          headerTitle: '',
          headerTransparent: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          headerShown: false,
          headerTitle: '',
          headerTransparent: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="briefcase" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={{
          headerShown: false,
          headerTitle: '',
          headerTransparent: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}
