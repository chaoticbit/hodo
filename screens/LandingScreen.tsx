import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { Text, View, Button } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps } from "../types";

export default function ({ navigation }: RootStackScreenProps<'Landing'>) {
    return (
        <ImageBackground source={require('../assets/images/FullScreenBG.png')} style={styles.container}>
            <Image source={require('../assets/images/Logo.png')} />
            <View style={{ marginTop: 130, width: 345 }}>
                <Button style={{ fontSize: 20 }} onPress={() => navigation.replace('Login')}>Log in</Button>
            </View>
            <Text style={{ fontSize: 20, marginBottom: 240 }} onPress={() => navigation.replace('SignUpIntro')}>Create Account</Text>
            <StatusBar style='dark' />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})