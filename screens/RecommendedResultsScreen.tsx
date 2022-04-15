import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import Store from "../Utils";

interface RecommendedPlaces {
    [key: string]: Array<string>
}

const recommendedPlacesMap: RecommendedPlaces = {
    culturecreature: ["Piazza della Signoria" , "Galleria dell'Accademia" , "Piazzale Michelangelo" , "Duomo di Milano" , "Teatro La Fenice" , "Piazza del Duomo" , "Mercato Centrale Firenze" , "Piazza dei Miracoli" , "St. Mark's Basilica" , "Grand Canal"],
    leisurelover: ["Mercato Centrale Firenze" , "Piazza del Duomo" , "Trevi Fountain" , "Via Monte Napoleone" , "Piazza della Signoria" , "Piazzale Michelangelo" , "Galleria dell'Accademia" , "Piazza dei Miracoli" , "Grand Canal" , "Colosseum"],
    activeadventure: ["Parco Naturale Tre Cime" , "Tre Cime di Lavaredo Loop" , "Sentiero delgi Dei" , "Corno Grande" , "Alta Via 1" , "Cinque Terre" , "Amalfi Coast Hiking" , "Amalfi Coast Beaches" , "Stromboli Volcano Tour" , "Positano"],
    partyperson: ["The Friends Pub" , "Navigli" , "Salotto42" , "Via Monte Napoleone" , "Piazza Navona" , "Trevi Fountain" , "Duomo di Milano" , "Parco Naturale Tre Cime" , "Tre Cime di Lavaredo Loop" , "Sentiero delgi Dei"],
    avidallrounder: ["Positano" , "Amalfi Coast Beaches" ,"Fiordo di Furore" , "Cinque Terre" , "Amalfi Coast Boat Tours" , "Amalfi Coast Hiking" , "Piazzale Michelangelo" , "Piazza dei Miracoli" , "Piazza del Duomo" , "Grand Canal"]
}

interface RecommendedPlaceProps {
    name: string;
}

const PlaceToVisitListItem = (props: RecommendedPlaceProps) => {
	return (
		<View style={styles.recommendedPlacesListItem}>
			<Image source={require('../assets/images/BG.png')} style={{
				width: 66,
				height: 66,
				borderRadius: 8
			}} />
			<View style={{ alignItems: 'flex-start', marginTop: -20 }}>
				<Text style={{ fontSize: 21, paddingLeft: 15, fontWeight: '300', color: '#333'}}>{props.name.length > 21 ? props.name.slice(0, 22) + '..' : props.name}</Text>
				<Text style={{ fontSize: 16, fontWeight: '300', paddingLeft: 15, color: '#999', paddingTop: 5}}>Italy</Text>
			</View>
			<FontAwesome5 name="heart" size={16} color='#555' style={{position: 'absolute', right: 10, top: 10}} />
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
           <View style={{width: width}}>
                <ScrollView>
                    <View style={{marginTop: 0, backgroundColor: 'transparent', alignItems: 'center'}}>
                        <View style={styles.bgImage}>
                            <Image source={require('../assets/images/HomeScreenBG.png')} />
                        </View>
                    </View>
                    <View style={{marginTop: 15, alignItems: 'center'}}>
                        <Text style={{fontSize: 24}}>Start planning your trip</Text>
                    </View>
                    <View style={{marginTop: 35, alignItems: 'center'}}>
                        {
                            places.map((place: any, index: number) => {
                                return (<PlaceToVisitListItem key={index} name={place} />)       
                            })
                        }                        
                    </View>
                </ScrollView>
            </View>
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    bgImage: {	  
		width: 395,
		height: 231,	
		zIndex: 999,		  
		backgroundColor: '#32354B', 	  
		borderBottomLeftRadius: 28,
		borderBottomRightRadius: 28 ,
		overflow: 'hidden',	  	  
	},
    recommendedPlacesListItem: {
		shadowColor: '#333',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.7,
		shadowRadius: 1,
		width: 348,
		borderRadius: 8,
		padding: 5,
		height: 85,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		marginBottom: 20
	},
})