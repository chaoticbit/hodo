import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { Button, Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ImageBGSearchInput from '../components/ImageBGSearchInput';
import HeaderPill from '../components/HeaderPill';
import PopularDestination from '../components/PopularDestination';
import { useState } from 'react';

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

export default function TabOneScreen({ route, navigation }: RootTabScreenProps<'TabOne'>) {
	const { firstTimeLogin }: any = route.params;
	console.log(`firstTimeLogin: ${firstTimeLogin}`);
	const [modalVisible, setModalVisible] = useState(firstTimeLogin);

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
						<Image source={require('../assets/images/recommendationMosaic.png')} style={{ width: 395, height: 216 }} />
						<Text style={{ paddingTop: 10, fontSize: 14, textAlign: 'center' }}>Get recommendations for Things to see and do for a destination of your choice. This can only work once you take the quiz. You can do that by going to profile section</Text>
						<View style={{ marginTop: 10, width: 160, }}>
							<Button onPress={() => setModalVisible(false)}>
								Okay
							</Button>
						</View>
					</View>
				</View>
			</Modal>
			<ImageBGSearchInput variant={'base'} navigation={navigation} />
			<HeaderPill label='Destinations for you' style={{ marginTop: 30 }} />
			<ScrollView horizontal={true} style={{ paddingVertical: 20, height: 130, marginTop: 20 }} contentContainerStyle={{ width: 645 }}>
				{
					popularDestinations.map((destination, index) => {
						return (<PopularDestination key={index} name={destination.name} image={destination.image} />)
					})
				}
			</ScrollView>
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
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		position: 'absolute',
		backgroundColor: 'rgba(0,0,0,.7)',
		width: 395,
		height: 845,
		overflow: 'hidden'
	},
	modalView: {
		margin: 20,
		width: 296,
		height: 543,
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
		elevation: 5,
		overflow: 'hidden'
	},
});
