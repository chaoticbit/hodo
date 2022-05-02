import { RootStackScreenProps } from "../types";
import { Text, View, Button } from "../components/Themed";
import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

export default function EditProfileScreen({ navigation }: RootStackScreenProps<'EditProfile'>) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ zIndex: 9999, height: 20, width: 20, position: 'absolute', top: 48, left: 30 }}>
                <Entypo name='cross' size={26} style={{ color: Colors.text }} />
            </TouchableOpacity>
            <Text style={{ fontFamily: 'Montserrat_800ExtraBold', fontSize: 26, textAlign: 'center', marginTop: 45, color: Colors.text }}>Edit Profile</Text>
            <View style={{
                padding: 20,
                alignItems: 'center'
            }}>
                <View style={{ width: 100, height: 100.5, borderRadius: 100, borderColor: '#F55353', borderWidth: 7, overflow: 'hidden' }}>
                    <Image source={require('../assets/images/ProfilePicture.png')} style={styles.resultImage} />
                </View>
                <Text style={{ fontSize: 14, paddingTop: 15, color: Colors.primary }}>Edit Profile Picture</Text>
                <View style={{ width: 345, marginTop: 20 }}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.textInput} placeholder='Name' value="Tanya Edwards" placeholderTextColor='#333' textAlign='left' />

                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.textInput} placeholder='Email' value="tanya.edwards@gmail.com" placeholderTextColor='#333' textAlign='left' />

                    <Text style={styles.label}>Username</Text>
                    <TextInput style={styles.textInput} placeholder='Email' value="mariotaJin" placeholderTextColor='#333' textAlign='left' />

                    <Button>Save</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    resultImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        zIndex: 9,
        marginTop: -4
    },
    textInput: {
        color: Colors.text,
        width: '100%',
        fontSize: 16,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#555',
        paddingHorizontal: 10,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginBottom: 30
    },
    label: {
        fontSize: 12,
        paddingLeft: 10,
        color: '#555'
    }
})