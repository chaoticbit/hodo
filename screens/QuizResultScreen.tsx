import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, TextInput, Button, Image, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';
import Store from '../Utils';

const personalityAssetMap: any = {
    hiker: {
        image: require('../assets/images/QuizResultsBG.png'),
        subtext: 'You are the life of the person. when you travel you like to meet new people and enjoy the night life.'
    }
}

export default function QuizResultScreen({ route, navigation } : RootStackScreenProps<'QuizResult'>) {
    const { personality } : any = route.params;
    
    Store.getData().then(({ personality }) => {
        console.log(`Personality : ${personality}`);        
    })

    const getImage = () => {
        return personalityAssetMap[personality].image;
    }

    const getSubText = () => {
        return personalityAssetMap[personality].subtext;
    }

    return (
        <ImageBackground source={getImage()} style={styles.container}>
           <View style={styles.panel}>
               <Image source={require('../assets/images/BG.png')} style={styles.resultImage} />
               <Text style={{color: 'black', fontSize: 20, marginTop: 20}}>You are a</Text>
               <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold', marginTop: 5}}>{personality}</Text>
               <Text style={{color: 'black', fontSize: 18, padding: 20, textAlign: 'center'}}>{getSubText()}</Text>
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