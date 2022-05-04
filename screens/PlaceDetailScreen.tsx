import { View, Text, Button } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { ImageBackground, StyleSheet, Modal, TouchableOpacity, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HeaderPill from "../components/HeaderPill";
import Colors from "../constants/Colors";
import { useState } from "react";

export default function PlaceDetailScreen({ navigation }: RootStackScreenProps<'PlaceDetail'>) {

    const [modalVisible, setModalVisible] = useState(false);

    const PersonalityPill = (props: any) => {
        return (
            <View style={{ height: 6, width: 24, borderRadius: 8, marginRight: 10, backgroundColor: props.color }}></View>
        )
    }

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ fontFamily: 'Montserrat_800ExtraBold', fontSize: 16 }}>Recommend Suggestion</Text>
                        <Text style={{ paddingTop: 10, fontSize: 14, textAlign: 'center' }}>Would you like us to recommend you places like these in the future?</Text>
                        <View style={{ marginTop: 10, width: 160, }}>
                            <Button onPress={() => setModalVisible(!modalVisible)}>
                                Yes, Please do!
                            </Button>
                        </View>
                        <View style={{ marginTop: 10, width: 160, borderRadius: 12, borderColor: Colors.primary, borderWidth: 1 }}>
                            <Button onPress={() => setModalVisible(!modalVisible)} style={{ backgroundColor: '#fff', color: Colors.primary }}>
                                No, Thanks!
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
            <ImageBackground source={require('../assets/images/Salotto.png')} style={[styles.bgImage, { height: 344 }]}>
                <LinearGradient colors={['rgba(45,156,219,0)', 'rgba(33,37,48,19)']} style={styles.linearGradient}></LinearGradient>
                <TouchableOpacity onPress={() => navigation.pop()} style={{ zIndex: 9999, height: 20, width: 20, position: 'absolute', top: 70, left: 30 }}>
                    <FontAwesome5 name='chevron-left' size={20} style={{ color: '#fff' }} />
                </TouchableOpacity>
                <View style={{ position: 'absolute', zIndex: 9999, paddingHorizontal: 30, backgroundColor: 'transparent' }}>
                    <Text style={{ fontFamily: 'Montserrat_800ExtraBold', color: '#fff', fontSize: 28, top: 233 }}>Salotto</Text>
                    <View style={{ top: 243, backgroundColor: 'transparent', flexDirection: 'row' }}>
                        <Feather name={'sun'} size={24} color={'#ffffff'} />
                        <FontAwesome5 name={'water'} size={24} color={'#ffffff'} style={{ marginLeft: 20 }} />
                    </View>
                    <View style={{ top: 263, backgroundColor: 'transparent', flexDirection: 'row' }}>
                        <PersonalityPill color='#1FA93D' />
                        <PersonalityPill color='#85BDFF' />
                        <PersonalityPill color='#484689' />
                    </View>
                    <View style={{ width: 375, backgroundColor: 'transparent' }}>
                        <Feather name={'info'} size={20} color='#fff' style={{ position: 'absolute', right: 30, top: 243 }} />
                        <FontAwesome5 name="heart" size={20} color={Colors.primary} style={{ position: 'absolute', right: 60, top: 243 }} onPress={() => setModalVisible(true)} />
                    </View>
                </View>
            </ImageBackground>
            <HeaderPill label='About' style={{ minWidth: 140, marginTop: 20 }} />
            <Text style={{ padding: 20, fontFamily: 'Montserrat_400Regular', opacity: .95, textTransform: 'lowercase', letterSpacing: 0.7, fontSize: 16, fontWeight: '100', textAlign: 'justify' }}>
                SALOTTO WAS BORN IN ROME AS A BOOKBAR IN THE BEAUTIFUL PIAZZA DI PIETRA, FACING THE ASTONISHING TEMPLE OF HADRIAN. THIS WAS IN SEPTEMBER 2004. DAMIANO MAZZARELLA, THE FOUNDER, BROUGHT A NEW WAY OF HANGING OUT AND SPENDING THE EVENINGS IN A UNIQUE ATMOSPHERE.
            </Text>
            <HeaderPill label='Things to do' style={{ minWidth: 140, marginTop: 20 }} />
            <View style={{ padding: 20 }}>
                <View style={{ paddingBottom: 5, flexDirection: 'row' }}>
                    <Ionicons name={'restaurant'} size={20} color={Colors.primary} />
                    <Text style={{ fontSize: 16, marginLeft: 10 }}>Drinks and fine dine</Text>
                </View>
                <View style={{ paddingBottom: 5, flexDirection: 'row' }}>
                    <FontAwesome5 name={'cocktail'} size={20} color={Colors.primary} style={{ marginRight: 10 }} />
                    <Text style={{ fontSize: 16, marginLeft: 10 }}>Mixology night</Text>
                </View>
                <View style={{ paddingBottom: 5, flexDirection: 'row' }}>
                    <FontAwesome5 name={'guitar'} size={20} color={Colors.primary} style={{ marginRight: 10 }} />
                    <Text style={{ fontSize: 16, marginLeft: 10 }}>Enjoy live music</Text>
                </View>
                <View style={{ paddingBottom: 5, flexDirection: 'row' }}>
                    <FontAwesome5 name={'fish'} size={20} color={Colors.primary} style={{ marginRight: 10 }} />
                    <Text style={{ fontSize: 16, marginLeft: 10 }}>Seafood sunday</Text>
                </View>
                <View style={{ paddingBottom: 5, flexDirection: 'row' }}>
                    <FontAwesome5 name={'theater-masks'} size={20} color={Colors.primary} style={{ marginRight: 10 }} />
                    <Text style={{ fontSize: 16, marginLeft: 10 }}>Theme nights</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.5)',
        width: 395,
        height: 812
    },
    modalView: {
        margin: 20,
        width: 296,
        height: 224,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})