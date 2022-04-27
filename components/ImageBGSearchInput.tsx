import { ImageBackground, StyleSheet, TextInput } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { View, Text, Button } from "./Themed";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function ImageBGSearchInput() {
    return (
        <ImageBackground source={require('../assets/images/HeyTraveler.png')} style={styles.bgImage}>
            <LinearGradient colors={['rgba(45,156,219,0)', 'rgba(33,37,48,19)']} style={styles.linearGradient}>

            </LinearGradient>
            <View style={{ position: 'absolute', zIndex: 9999, paddingHorizontal: 30, backgroundColor: 'transparent' }}>
                <Text style={{ fontFamily: 'Montserrat_800ExtraBold', color: '#fff', fontSize: 28, top: 213 }}>Hey Traveler!</Text>
                <Text style={{ fontFamily: 'Montserrat_500Medium', color: '#fff', fontSize: 16, top: 223, width: 335, textAlign: 'justify' }}>
                    Know where to go? Enter the destination you wish to visit and we will recommend
                </Text>
                <View style={styles.searchSection}>
                    <Feather style={styles.searchIcon} name="map-pin" size={16} color={Colors.primary} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your destination"
                        underlineColorAndroid="transparent"
                        placeholderTextColor={'#333'}
                    />
                </View>
                <View style={{ backgroundColor: 'transparent', top: 263 }}>
                    <Button style={{ fontFamily: 'Montserrat_500Medium', fontSize: 16, borderRadius: 16 }}>Recommend</Button>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        width: 395,
        height: 459,
        zIndex: 9,
        position: 'relative'
    },
    linearGradient: {
        flex: 1,
        width: 395,
        height: 459,
        zIndex: 9999,
        opacity: .99
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        top: 243
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        fontFamily: 'Montserrat_400Regular'
    },
});