import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, TextInput, Button, Image, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';
import Store from '../Utils';		

const personalityAssetMap: any = {
    activeadventure: {
        image: require('../assets/images/Hike.jpg'),
        subtext: 'You are the life of the person. when you travel you like to meet new people and enjoy the night life.',
        label: 'Active Adventure'
    },
    partyperson: {
        image: require('../assets/images/enjoy_nightlife.jpg'),
        subtext: 'You are the life of the person. when you travel you like to meet new people and enjoy the night life.',
        label: 'Party Person'
    },
    leisurelover: {
        image: require('../assets/images/Chill_by_pool.jpg'),
        subtext: 'You are the life of the person. when you travel you like to meet new people and enjoy the night life.',
        label: 'Leisure Lover'
    },
    culturecreature: {
        image: require('../assets/images/explore_city.jpg'),
        subtext: 'You are the life of the person. when you travel you like to meet new people and enjoy the night life.',
        label: 'Culture Creature'
    },
    avidallrounder: {
        image: require('../assets/images/I_want_it_all.jpg'),
        subtext: 'You are the life of the person. when you travel you like to meet new people and enjoy the night life.',
        label: 'Avid All Rounder'
    }
}

export default function QuizResultScreen({ route, navigation } : RootStackScreenProps<'QuizResult'>) {
    const { personality } : any = route.params;
    
    console.log(personality);
    
    Store.getData().then(({ personality }) => {
        console.log(`Personality : ${personality}`);        
    }) 

    const p = personalityAssetMap[personality];

    return (
        <ImageBackground source={require('../assets/images/QuizResultsBG.png')} style={styles.container}>
           <View style={styles.panel}>
               <Image source={p.image} style={styles.resultImage} />
               <Text style={{color: 'black', fontSize: 20, marginTop: 20}}>You are a</Text>
               <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold', marginTop: 5}}>{p.label}</Text>
               <Text style={{color: 'black', fontSize: 18, padding: 20, textAlign: 'center'}}>{p.subtext}</Text>
           </View>
           <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.loginButton}>
                <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'black'}}>Start Tripping!</Text>
           </TouchableOpacity>				
            <TouchableOpacity onPress={() => navigation.replace('SignUpQuiz')}>
                <Text style={{color: '#FEBD2F', textAlign: 'center', fontSize: 16 , marginTop: 16}}>Retake Quiz</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    panel: {
        width: 312,
        height: 505,
        backgroundColor: '#fff',
        borderRadius: 22,
        padding: 14,
        alignItems: 'center'
    },
    resultImage: {
        width: '100%',
        height: 252,
        borderRadius: 22
    },
    loginButton: {
        backgroundColor: '#FEBD2F',
        borderRadius: 12,
        paddingVertical: 14,
        marginTop: 24,
        paddingHorizontal: 25
    }
})