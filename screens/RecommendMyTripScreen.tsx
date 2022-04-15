import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RecommendMyTripScreen({ navigation }: RootStackScreenProps<'RecommendMyTrip'>) {
    const [days, setDays] = useState(2);
    const [people, setPeople] = useState(2);

    const width = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={{width: width}}>
                <ScrollView>
                    <View style={{marginTop: 0, backgroundColor: 'transparent', alignItems: 'center'}}>
                        <View style={styles.bgImage}>
                            <Image source={require('../assets/images/HomeScreenBG.png')} />
                        </View>
                        <View style={{backgroundColor: 'transparent', marginTop: -20, alignItems: 'center', zIndex: 999,}}>
                            <TextInput placeholder='Enter a destination' placeholderTextColor='#555' style={styles.search} />
                        </View>
                        <View style={{
                            width: 296,
                            height: 114,
                            borderRadius: 16,				
                            borderColor: 'lightgray',
                            borderWidth: 1,
                            marginTop: 20,                    
                            paddingTop: 20,                    
                        }}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                <Text style={{fontSize: 20}}>Number of days</Text>
                                <TouchableOpacity onPress={() => setDays(days => days + 1)}>
                                    <FontAwesome5 name='plus-circle' size={20} style={{marginLeft: 10}} />
                                </TouchableOpacity>
                                <Text style={{fontSize: 20, marginTop: -2}}>{days}</Text>
                                <TouchableOpacity onPress={() => setDays(days => days > 2 ? days - 1 : 2)}>
                                    <FontAwesome5 name='minus-circle' size={20} />
                                </TouchableOpacity>
                            </View>                    
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
                                <Text style={{fontSize: 19}}>Number of people</Text>
                                <TouchableOpacity onPress={() => setPeople(people => people + 1)}>
                                    <FontAwesome5 name='plus-circle' size={20} />
                                </TouchableOpacity>
                                <Text style={{fontSize: 20, marginTop: -2}}>{people}</Text>
                                <TouchableOpacity onPress={() => setPeople(people => people > 2 ? people - 1 : 2)}>
                                    <FontAwesome5 name='minus-circle' size={20} />
                                </TouchableOpacity>
                            </View>                                                            
                        </View>
                        <View style={{marginTop: 40, marginBottom: 30, width: 276, justifyContent: 'space-between', flexDirection: 'row'}}>
                            {/* <Calendar                                 
                                minDate={new Date().toISOString()} 
                                markingType={'period'}
                                onDayPress={day => {
                                    console.log('selected day', day);
                                }}
                            />                 */}
                            <View>
                                <Text style={{fontSize: 22, textAlign: 'center'}}>From </Text>
                                <DateTimePicker 
                                    testID="dateTimePicker"
                                    value={new Date()}
                                    mode={'date'}
                                    style={{width: 200, marginLeft: -80, marginTop: 10}}
                                />
                            </View>                                                        
                            <View>
                                <Text style={{fontSize: 22, textAlign: 'center'}}>To </Text>
                                <DateTimePicker 
                                    testID="dateTimePicker"
                                    value={new Date()}
                                    mode={'date'}
                                    style={{width: 200, marginLeft: -80, marginTop: 10}}
                                />
                            </View>                                                        
                        </View>
                        <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.loginButton}>
                            <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'black'}}>Recommend</Text>
                        </TouchableOpacity>	
                    </View>
                </ScrollView>       
            </View>                 
            <StatusBar style='light' />
        </View>
    )
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
	search: {
		backgroundColor: '#fff',
		width: 296,
		height: 48,
		borderRadius: 8,
		shadowColor: '#787878',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,  	  
		paddingLeft: 20,
		fontSize: 18,
		fontWeight: '300',
		color: '#333',	  
	},
    loginButton: {
        backgroundColor: '#FEBD2F',
        borderRadius: 12,
        paddingVertical: 14,
        marginTop: 24,
        paddingHorizontal: 25
    }
})

// culturecreature: ["Piazza della Signoria" , "Galleria dell'Accademia" , "Piazzale Michelangelo" , "Duomo di Milano" , "Teatro La Fenice" , "Piazza del Duomo" , "Mercato Centrale Firenze" , "Piazza dei Miracoli" , "St. Mark's Basilica" , "Grand Canal"]

// leisurelover: ["Mercato Centrale Firenze" , "Piazza del Duomo" , "Trevi Fountain" , "Via Monte Napoleone" , "Piazza della Signoria" , "Piazzale Michelangelo" , "Galleria dell'Accademia" , "Piazza dei Miracoli" , "Grand Canal" , "Colosseum"]

// activeadventurer: ["Parco Naturale Tre Cime" , "Tre Cime di Lavaredo Loop" , "Sentiero delgi Dei" , "Corno Grande" , "Alta Via 1" , "Cinque Terre" , "Amalfi Coast Hiking" , "Amalfi Coast Beaches" , "Stromboli Volcano Tour" , "Positano"]

// partyperson: ["The Friends Pub" , "Navigli" , "Salotto42" , "Via Monte Napoleone" , "Piazza Navona" , "Trevi Fountain" , "Duomo di Milano" , "Parco Naturale Tre Cime" , "Tre Cime di Lavaredo Loop" , "Sentiero delgi Dei"]

// avidallrounder: ["Positano" , "Amalfi Coast Beaches" ,"Fiordo di Furore" , "Cinque Terre" , "Amalfi Coast Boat Tours" , "Amalfi Coast Hiking" , "Piazzale Michelangelo" , "Piazza dei Miracoli" , "Piazza del Duomo" , "Grand Canal"]
