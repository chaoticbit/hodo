import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import HeaderPill from "../components/HeaderPill";
import ImageBGSearchInput from "../components/ImageBGSearchInput";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { RootStackScreenProps } from "../types";
import Store from "../Utils";
import { CULTURE_CREATURE, LEISURE_LOVER, ACTIVE_ADVENTURE, PARTY_PERSON, AVID_ALL_ROUNDER } from "../places";
export interface Place {
    Id: string;
    Name: string;
    Image: string;
    City: string;
    Tags: Array<string>;
}
interface RecommendedPlaces {
    [key: string]: Array<Place>;
}

export const recommendedPlacesMap: RecommendedPlaces = {
    culturecreature: CULTURE_CREATURE,
    leisurelover: LEISURE_LOVER,
    activeadventure: ACTIVE_ADVENTURE,
    partyperson: PARTY_PERSON,
    avidallrounder: AVID_ALL_ROUNDER
}

export const PlaceToVisitListItem = (props: {
    place: Place,
    liked: boolean
}) => {
    let icon;
    props.liked ? icon = "heart" : icon = "heart-o";
    const [heart, setHeart] = useState(icon);

    function saveTrip(heart: any) {
        heart === 'heart-o' ? setHeart("heart") : setHeart("heart-o");
    }
    return (
        <View style={styles.recommendedPlacesListItem}>
            <Image source={{ uri: props.place.Image }} style={{
                width: 138,
                height: 91,
                borderRadius: 8,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            }} />
            <View style={{ alignItems: 'flex-start', marginTop: 0 }}>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 14, paddingLeft: 15, fontWeight: '300', color: '#333' }}>{props.place.Name.length > 21 ? props.place.Name.slice(0, 22) + '..' : props.place.Name}</Text>
                <Text style={{ fontSize: 12, fontWeight: '300', paddingLeft: 15, color: '#999', marginTop: 5 }}>{props.place.City}</Text>
                <Text style={{ fontSize: 12, fontWeight: '300', paddingLeft: 15, color: '#999', marginTop: 25 }}>{props.place.Tags.join(', ')}</Text>
            </View>
            <TouchableOpacity style={{ position: 'absolute', right: 20, bottom: 10 }}>
                {
                    props.liked ? (
                        <FontAwesome name={heart} size={16} color={Colors.primary} onPress={(e) => saveTrip(heart)} />
                    ) : (
                        <FontAwesome name={heart} size={16} color={Colors.primary} onPress={(e) => saveTrip(heart)} />
                    )
                }
            </TouchableOpacity>
        </View>
    )
}

export default function RecommendedResultsScreen({ navigation }: RootStackScreenProps<'RecommendedResults'>) {
    const [places, setPlaces] = useState<Array<Place>>([]);

    const width = Dimensions.get('window').width;

    Store.getData().then(({ personality }) => {
        setPlaces(recommendedPlacesMap[personality]);
        console.log(places);
    })

    return (
        <View style={styles.container}>
            <ImageBGSearchInput variant={'extended'} navigation={navigation} />
            <HeaderPill label='Popular Destinations' style={{ marginTop: 20 }} />
            <View style={{ width: width, marginTop: 20, }}>
                <ScrollView horizontal={false} contentContainerStyle={{ paddingTop: 10, alignItems: 'center', height: 1500 }}>
                    {
                        places.map((place, index) => {
                            return (<PlaceToVisitListItem key={index} place={place} liked={false} />)
                        })
                    }
                </ScrollView>
            </View>
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        width: 395,
        height: 231,
        zIndex: 999,
        backgroundColor: '#32354B',
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        overflow: 'hidden',
    },
    recommendedPlacesListItem: {
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 1,
        width: 369,
        marginLeft: 20,
        borderRadius: 8,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        height: 91,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
})