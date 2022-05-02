import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import HeaderPill from "../components/HeaderPill";
import ImageBGSearchInput from "../components/ImageBGSearchInput";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { RootStackScreenProps } from "../types";
import Store from "../Utils";

interface Place {
    name: string;
    image: string;
    city: string;
    tags: Array<string>;
}
interface RecommendedPlaces {
    [key: string]: Array<string>;
    // [key: string]: Array<Place>
}


// {
//     name: "Piazza della Signoria",
//     image: "",
//     city: "",
//     tags: ""
// },
const recommendedPlacesMap: RecommendedPlaces = {
    culturecreature: [
        "Piazza della Signoria", "Galleria dell'Accademia", "Piazzale Michelangelo", "Duomo di Milano", "Teatro La Fenice", "Piazza del Duomo", "Mercato Centrale Firenze", "Piazza dei Miracoli", "St. Mark's Basilica", "Grand Canal"
    ],
    leisurelover: ["Mercato Centrale Firenze", "Piazza del Duomo", "Trevi Fountain", "Via Monte Napoleone", "Piazza della Signoria", "Piazzale Michelangelo", "Galleria dell'Accademia", "Piazza dei Miracoli", "Grand Canal", "Colosseum"],
    activeadventure: ["Parco Naturale Tre Cime", "Tre Cime di Lavaredo Loop", "Sentiero delgi Dei", "Corno Grande", "Alta Via 1", "Cinque Terre", "Amalfi Coast Hiking", "Amalfi Coast Beaches", "Stromboli Volcano Tour", "Positano"],
    partyperson: ["The Friends Pub", "Navigli", "Salotto42", "Via Monte Napoleone", "Piazza Navona", "Trevi Fountain", "Duomo di Milano", "Parco Naturale Tre Cime", "Tre Cime di Lavaredo Loop", "Sentiero delgi Dei"],
    avidallrounder: ["Positano", "Amalfi Coast Beaches", "Fiordo di Furore", "Cinque Terre", "Amalfi Coast Boat Tours", "Amalfi Coast Hiking", "Piazzale Michelangelo", "Piazza dei Miracoli", "Piazza del Duomo", "Grand Canal"]
}

interface RecommendedPlaceProps {
    name: string;
}

export const PlaceToVisitListItem = (props: RecommendedPlaceProps) => {
    return (
        <View style={styles.recommendedPlacesListItem}>
            <Image source={require('../assets/images/BG.png')} style={{
                width: 138,
                height: 91,
                borderRadius: 8,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            }} />
            <View style={{ alignItems: 'flex-start', marginTop: 0 }}>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 14, paddingLeft: 15, fontWeight: '300', color: '#333' }}>{props.name.length > 21 ? props.name.slice(0, 22) + '..' : props.name}</Text>
                <Text style={{ fontSize: 12, fontWeight: '300', paddingLeft: 15, color: '#999', marginTop: 5 }}>Italy</Text>
                <Text style={{ fontSize: 12, fontWeight: '300', paddingLeft: 15, color: '#999', marginTop: 25 }}>Italy</Text>
            </View>
            <FontAwesome5 name="heart" size={16} color={Colors.primary} style={{ position: 'absolute', right: 20, bottom: 10 }} />
        </View>
    )
}

export default function RecommendedResultsScreen({ navigation }: RootStackScreenProps<'RecommendedResults'>) {
    const [places, setPlaces] = useState<Array<string>>([]);

    const width = Dimensions.get('window').width;

    Store.getData().then(({ personality }) => {
        console.log(personality);
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
                            return (<PlaceToVisitListItem key={index} name={place} />)
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