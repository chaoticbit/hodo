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
import { ColorSchemeName, Pressable } from 'react-native';

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

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import RecommendMyTripScreen from '../screens/RecommendMyTripScreen';

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
      <Stack.Screen name="Root" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="SignUpIntro" component={SignUpIntroScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpQuiz" component={SignUpQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpStartQuiz" component={SignUpStartQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuizResult" component={QuizResultScreen} options={{ headerShown: false }} />
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
          headerTitle: 'Explore',
          headerTransparent: false,
          tabBarShowLabel: false,
          headerTintColor: '#fff',        
          headerStyle: {
            backgroundColor: '#32354B',            
            borderBottomWidth: 0,
            shadowRadius: 0,
              shadowOffset: {
              height: 0,
            },
          },
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 30,
            paddingLeft: 20
          },       
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,          
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          headerTitle: 'Plan',
          headerTransparent: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="plane" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          headerTitle: 'Search',
          headerTransparent: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={{
          headerTitle: 'Settings',
          headerTransparent: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
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
  return <FontAwesome size={34} style={{ marginBottom: -3 }} {...props} />;
}
