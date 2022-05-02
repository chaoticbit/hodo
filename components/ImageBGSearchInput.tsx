import { ImageBackground, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { View, Text, Button } from "./Themed";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import SearchInput from "./SearchInput";

export default function ImageBGSearchInput(props: {
    navigation: any,
    variant: "base" | "extended",
    image?: string
}) {
    const title = props.variant === 'base' ? 'Hey Traveler!' : 'Italy';
    const subText = props.variant === 'base' ? 'Know where to go? Enter the destination you wish to visit and we will recommend' : 'Hope you like the places we have recommended for you! ';
    const image = props.variant === 'base' ? require('../assets/images/HeyTraveler.png') : require('../assets/images/Italy.png');

    return (
        <ImageBackground source={image} style={[styles.bgImage, { height: props.variant === 'base' ? 459 : 381 }]}>
            <LinearGradient colors={['rgba(45,156,219,0)', 'rgba(33,37,48,19)']} style={styles.linearGradient}></LinearGradient>
            {

                props.variant === 'extended' ? (
                    <TouchableOpacity onPress={() => props.navigation.pop()} style={{ zIndex: 9999, height: 20, width: 20, position: 'absolute', top: 70, left: 30 }}>
                        <FontAwesome5 name='chevron-left' size={20} style={{ color: '#fff' }} />
                    </TouchableOpacity>
                ) : (<></>)
            }
            <View style={{ position: 'absolute', zIndex: 9999, paddingHorizontal: 30, backgroundColor: 'transparent' }}>
                <Text style={{ fontFamily: 'Montserrat_800ExtraBold', color: '#fff', fontSize: 28, top: props.variant === 'base' ? 213 : 263 }}>{title}</Text>
                <Text style={{ fontFamily: 'Montserrat_500Medium', color: '#fff', fontSize: 16, top: props.variant === 'base' ? 223 : 273, width: 335, textAlign: 'justify' }}>
                    {subText}
                </Text>
                {
                    props.variant === 'base' ? (
                        <>
                            <SearchInput style={{ top: 243 }} />
                            <View style={{ backgroundColor: 'transparent', top: 263 }}>
                                <Button onPress={() => props.navigation.push('RecommendedResults')} style={{ fontFamily: 'Montserrat_500Medium', fontSize: 16, borderRadius: 16 }}>Recommend</Button>
                            </View>
                        </>
                    ) : (<></>)
                }
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        width: 395,
        zIndex: 9,
        position: 'relative'
    },
    linearGradient: {
        flex: 1,
        width: 395,
        height: 459,
        zIndex: 9999,
        opacity: .99
    }
});