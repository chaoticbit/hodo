import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
		<View style={{marginTop: 0, backgroundColor: 'transparent', alignItems: 'center'}}>
			<View style={styles.bgImage}>
				<Image source={require('../assets/images/HomeScreenBG.png')} />
			</View>
			<View style={{backgroundColor: 'transparent', marginTop: -20, alignItems: 'center', zIndex: 999,}}>
				<TextInput placeholder='Enter a destination' placeholderTextColor='#555' style={styles.search} />
			</View>
			<View style={{
				width: 296,
				height: 164,
				borderRadius: 16,				
				borderColor: 'lightgray',
				borderWidth: 1,
				marginTop: 20,
				alignItems: 'center',
				padding: 20
			}}>
				<Text style={{fontSize: 18}}>Start planning your trip</Text>
				<View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-around', width: 286}}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100}}>
						<FontAwesome5 name='robot' size={44} color='#FEBD2F' />
						<Text style={{textAlign: 'center', paddingTop: 5}}>Recommended for me</Text>
					</View>					
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100}}>
						<FontAwesome5 name='globe' size={44} color='#FEBD2F' />
						<Text style={{textAlign: 'center', paddingTop: 5}}>Plan my own trip</Text>
					</View>										
				</View>
				<View style={{
					borderWidth: 0,
					borderColor: '#999',
					height: 207,
					width: 395,
					shadowColor: '#555',
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 0.7,
					shadowRadius: 1.5,
					borderTopLeftRadius: 26,
					borderTopRightRadius: 26,
					marginTop: 45					
				}}>
					<ScrollView style={{
						padding: 20,
					}} contentContainerStyle={styles.contentContainer}>
						<PlaceToVisitListItem />
						<PlaceToVisitListItem />
					</ScrollView>
				</View>
			</View>
		</View>
		<StatusBar style='light' />
    </View>
  );
}

const PlaceToVisitListItem = () => {
	return (
		<View style={styles.recommendedPlacesListItem}>
			<Image source={require('../assets/images/BG.png')} style={{
				width: 66,
				height: 66,
				borderRadius: 8
			}} />
			<View style={{ alignItems: 'flex-start', marginTop: -20 }}>
				<Text style={{ fontSize: 22, paddingLeft: 15}}>Grand Canyon</Text>
				<Text style={{ fontSize: 16, paddingLeft: 15, color: '#999', paddingTop: 5}}>Ideal time to visit during Fall</Text>
			</View>
			<FontAwesome5 name="heart" size={16} color='#555' style={{position: 'absolute', right: 10, top: 10}} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',       
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
  	recommendedPlacesListItem: {
		shadowColor: '#555',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 1.5,
		width: 348,
		borderRadius: 8,
		padding: 5,
		height: 85,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		marginBottom: 20
	},
	contentContainer: {
		alignItems: 'center'
	}
});
