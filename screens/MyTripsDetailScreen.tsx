import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import HeaderPill from "../components/HeaderPill";
import { View, Text } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import Store from "../Utils";
import { Place, PlaceToVisitListItem, recommendedPlacesMap } from "./RecommendedResultsScreen";

export default function MyTripsDetailScreen({ navigation }: RootStackScreenProps<'MyTripsDetail'>) {
    const [places, setPlaces] = useState<Array<Place>>([]);

    const width = Dimensions.get('window').width;

    Store.getData().then(({ personality }) => {
        const places = recommendedPlacesMap[personality].slice(0, 5);
        setPlaces(places);
    })

    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: '#143F6B',
                    height: 129,
                    width: 395,
                }}
            >
                <TouchableOpacity onPress={() => navigation.pop()} style={{ zIndex: 9999, height: 20, width: 20, position: 'absolute', top: 75, left: 30 }}>
                    <FontAwesome5 name='chevron-left' size={20} style={{ color: '#fff' }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_800ExtraBold', fontSize: 26, color: '#fff', top: 70, left: 70, textAlign: 'left' }}>Italy</Text>
            </View>
            <View style={{ marginTop: 30, width: 375 }}>
                <HeaderPill label="Saved Places" style={{ minWidth: 120 }} />
                <View style={{ width: width, marginTop: 20, }}>
                    <ScrollView horizontal={false} contentContainerStyle={{ paddingTop: 10, alignItems: 'center', height: 900 }}>
                        {
                            places.map((place, index) => {
                                return (<PlaceToVisitListItem key={index} place={place} liked={true} />)
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})