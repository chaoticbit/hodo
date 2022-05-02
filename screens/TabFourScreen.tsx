import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, Image, Switch } from "react-native";

import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";

export default function TabFourScreen({ navigation }: RootTabScreenProps<'TabFour'>) {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Montserrat_800ExtraBold', fontSize: 26, textAlign: 'center', marginTop: 65, color: Colors.text }}>Edit Profile</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <View style={{ width: 140.5, height: 142.5, borderRadius: 100, borderColor: '#F55353', borderWidth: 7, overflow: 'hidden' }}>
                    <Image source={require('../assets/images/ProfilePicture.png')} style={styles.resultImage} />
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Username</Text>
                    <Text>mariotaJin</Text>
                </View>
                <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />

                <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Email</Text>
                    <Text>tanya.edwards@gmail.com</Text>
                </View>
                <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />

                <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Privacy & Security</Text>
                    <Text>********</Text>
                </View>
                <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />

                <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Notifications</Text>
                    <Text><Switch value={true} thumbColor={'#fff'} trackColor={{ true: Colors.primary }} /></Text>
                </View>
                <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />

                <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: Colors.primary }}>Delete Profile</Text>
                </View>
                <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    resultImage: {
        width: 130,
        height: 140,
        borderRadius: 100,
        zIndex: 9,
        marginTop: -4
    },
    separator: {
        marginVertical: 22,
        height: 1.5,
        width: '90%',
    },
})