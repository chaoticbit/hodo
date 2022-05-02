import { Image, ScrollView, StyleSheet } from "react-native";
import HeaderPill from "../components/HeaderPill";
import PopularDestination from "../components/PopularDestination";

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from "../types";

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
    },
    {
        name: 'Greece',
        image: require('../assets/images/Greece.png')
    },
    {
        name: 'Greece',
        image: require('../assets/images/Greece.png')
    }
]

const Destination = (props: any) => {
    return (
        <View style={{
            width: 160,
            height: 160,
            borderRadius: 16,
            overflow: 'hidden',
            marginRight: 20,
            marginBottom: 16
        }}>
            <Image style={{
                width: 160,
                height: 160,
                borderRadius: 16,
                overflow: 'hidden'
            }} source={props.image} resizeMode={'cover'} resizeMethod={'resize'} />
            <View style={{
                position: 'absolute',
                backgroundColor: '#fff',
                borderRadius: 8,
                width: 90,
                height: 24,
                bottom: 8,
                left: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ color: '#000' }}>{props.name}</Text>
            </View>
        </View>
    )
}

export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: '#143F6B',
                    height: 129,
                    width: 395,
                }}
            >
                <Text style={{ fontFamily: 'Montserrat_800ExtraBold', fontSize: 26, color: '#fff', top: 70, textAlign: 'center' }}>Trips</Text>
            </View>
            <View style={{ marginTop: 30, width: 375 }}>
                <HeaderPill label="Saved Trips" style={{ minWidth: 120 }} />
                <ScrollView horizontal={false} style={{ paddingVertical: 20, height: 600, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 15 }}>
                        {
                            popularDestinations.map((destination, index) => {
                                return (<Destination style={{ width: 160, height: 160 }} key={index} name={destination.name} image={destination.image} />)
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})