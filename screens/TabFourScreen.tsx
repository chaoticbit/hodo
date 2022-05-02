import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, Image, Switch, ScrollView } from "react-native";

import { Text, View, useThemeColor } from '../components/Themed';
import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import useColorScheme from '../hooks/useColorScheme';

export default function TabFourScreen({ navigation }: RootTabScreenProps<'TabFour'>) {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Montserrat_800ExtraBold', fontSize: 26, textAlign: 'center', marginTop: 65, color: Colors.text }}>Profile</Text>
            <ScrollView horizontal={false}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: 140.5, height: 142.5, borderRadius: 100, borderColor: '#F55353', borderWidth: 7, overflow: 'hidden' }}>
                        <Image source={require('../assets/images/ProfilePicture.png')} style={styles.resultImage} />
                    </View>
                    <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 16, paddingTop: 10 }}>Tanya Edwards</Text>
                    <Text style={{ fontSize: 14, paddingTop: 5 }}>Edit</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>Appearance</Text>
                        <SegmentedControl
                            values={['System', 'Light', 'Dark']}
                            tintColor={Colors.primary}
                            selectedIndex={0}
                            appearance='dark'
                            style={{ width: 200, marginRight: -10, backgroundColor: '#fff' }}
                        />
                    </View>
                    <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />
                    {/* <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>Username</Text>
                        <Text>mariotaJin</Text>
                    </View>
                    <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />

                    <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>Email</Text>
                        <Text>tanya.edwards@gmail.com</Text>
                    </View>
                    <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" /> */}

                    <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>Personality</Text>
                        <AntDesign name="right" size={20} color={Colors.text} />
                    </View>
                    <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />

                    <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>Privacy & Security</Text>
                        <AntDesign name="right" size={20} color={Colors.text} />
                    </View>
                    <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />

                    <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>Account</Text>
                        <AntDesign name="right" size={20} color={Colors.text} />
                    </View>
                    <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />

                    <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>Notifications</Text>
                        <Text><Switch value={true} thumbColor={'#fff'} trackColor={{ true: Colors.primary }} /></Text>
                    </View>
                    <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />

                    <View style={{ width: 375, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: Colors.primary }}>Log out</Text>
                    </View>
                    <View style={styles.separator} lightColor="rgba(245,83,83,0.3)" darkColor="rgba(245,83,83,0.9)" />
                </View>
            </ScrollView>
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