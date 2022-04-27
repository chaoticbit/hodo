import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Button, Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ImageBGSearchInput from '../components/ImageBGSearchInput';
import HeaderPill from '../components/HeaderPill';
import PopularDestination from '../components/PopularDestination';

const popularDestinations = [
	{
		name: 'Thailand',
		image: require('../assets/images/Thailand.png')
	},
	{
		name: 'Spain',
		image: require('../assets/images/Spain.png')
	},
	{
		name: 'Greece',
		image: require('../assets/images/Greece.png')
	}
]

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
	return (
		<View style={styles.container}>
			<ImageBGSearchInput />
			<HeaderPill label='Popular Destination' style={{ marginTop: 30 }} />
			<ScrollView horizontal={true} style={{ paddingVertical: 20, height: 130, marginTop: 20 }} contentContainerStyle={{ width: 645 }}>
				{
					popularDestinations.map((destination, index) => {
						return (<PopularDestination key={index} name={destination.name} image={destination.image} />)
					})
				}
			</ScrollView>
			{/* <View style={{marginTop: 0, backgroundColor: 'transparent', alignItems: 'center'}}>
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
						<TouchableOpacity onPress={() => navigation.push('RecommendMyTrip')}>
							<View style={{alignItems: 'center', justifyContent: 'center', width: 100}}>
								<FontAwesome5 name='robot' size={44} color='#FEBD2F' />
								<Text style={{textAlign: 'center', paddingTop: 5}}>Recommended for me</Text>
							</View>					
						</TouchableOpacity>
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
			</View> */}
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
				<Text style={{ fontSize: 22, paddingLeft: 15 }}>Grand Canyon</Text>
				<Text style={{ fontSize: 16, paddingLeft: 15, color: '#999', paddingTop: 5 }}>Ideal time to visit during Fall</Text>
			</View>
			<FontAwesome5 name="heart" size={16} color='#555' style={{ position: 'absolute', right: 10, top: 10 }} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
