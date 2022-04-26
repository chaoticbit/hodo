import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import { Text, View, Button } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';
import Store from '../Utils';

const personalityAssetMap: any = {
    activeadventure: {
        image: require('../assets/images/Hike.jpg'),
        subtext: 'You lead an active life and that reflects in your travels, when you are not hiking, or running along the beach, you are trying different adventure sports. You love seeing sunsets from a mountain and all that climb feels worth the view.',
        label: 'Active Adventure',
        color: '#1FA93D'
    },
    partyperson: {
        image: require('../assets/images/enjoy_nightlife.jpg'),
        subtext: 'You are the life of a party. You travel to have fun and to unwind. You love meeting new people and exploring the night life of the city you visit and one can find you enjoying wine and fine dine options in the downtown',
        label: 'Party Person',
        color: '#F42254'
    },
    leisurelover: {
        image: require('../assets/images/Chill_by_pool.jpg'),
        subtext: 'You travel to relax. A morning by the pool, an afternoon leisure stroll around the city and evening drinks and fancy dinners while enjoying a peaceful sunset by the beach is your jam. You love to relax and rejuvenate with your friends and family and area super laid-back travel companion.',
        label: 'Leisure Lover',
        color: '#85BDFF'
    },
    culturecreature: {
        image: require('../assets/images/explore_city.jpg'),
        subtext: 'You love to explore places that have historic or cultural importance. You are a history buff, an art connoisseur who likes to soak in the local colors and visit the most touristy places that the destination has to offer.',
        label: 'Culture Creature',
        color: '#FFC701'
    },
    avidallrounder: {
        image: require('../assets/images/I_want_it_all.jpg'),
        subtext: 'You want it all! You want to hike that mountain, enjoy an evening dancing with your friends, you want to soak in the city culture and you want to chill and have a spa day! You love exploring a destination to the fullest and experience everything that the city has to offer.',
        label: 'Avid All Rounder',
        color: '#484689'
    }
}

export default function QuizResultScreen({ route, navigation }: RootStackScreenProps<'QuizResult'>) {
    const { personality }: any = route.params;

    console.log(personality);

    Store.getData().then(({ personality }) => {
        console.log(`Personality : ${personality}`);
    })

    const p = personalityAssetMap[personality];

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/images/ResultsConfetti.png')} height={220} style={{ width: 395 }} />
            </View>
            <View style={{ width: 184, height: 184, borderRadius: 100, borderColor: p.color, borderWidth: 7, marginTop: -100, overflow: 'hidden' }}>
                <Image source={p.image} style={styles.resultImage} />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 28, fontFamily: 'Montserrat_800ExtraBold' }}>{p.label}</Text>
            </View>
            <Text style={{ color: '#333', fontSize: 15, fontFamily: 'Montserrat_400Regular', padding: 20, marginBottom: 20, paddingHorizontal: 45, fontWeight: '100', textAlign: 'justify', letterSpacing: 1.1, lineHeight: 28 }}>{p.subtext}</Text>
            <Button onPress={() => navigation.replace('Home')} style={{ width: 325, fontSize: 16 }}>Start Tripping</Button>
            <TouchableOpacity onPress={() => navigation.replace('SignUpQuiz')} style={styles.loginButton}>
                <Text style={{ color: Colors.primary, textAlign: 'center', fontSize: 16 }}>Retake Quiz</Text>
            </TouchableOpacity>
            <StatusBar style='light' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
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
        width: 169.7,
        height: 169.7,
        borderRadius: 100,
        zIndex: 9
    },
    loginButton: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 14,
        marginTop: 24,
        borderWidth: 1,
        borderColor: Colors.primary,
        width: 325
    }
})