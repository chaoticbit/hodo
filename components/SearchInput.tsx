import { StyleSheet, TextInput, View as DefaultView } from "react-native";
import { View, Text } from "./Themed";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export type ViewProps = DefaultView['props'];

const SearchInput = (props: ViewProps) => {
    const { style } = props;
    return (
        <View style={[styles.searchSection, style]}>
            <Feather style={styles.searchIcon} name="map-pin" size={16} color={Colors.primary} />
            <TextInput
                style={styles.input}
                placeholder="Enter your destination"
                underlineColorAndroid="transparent"
                placeholderTextColor={'#333'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        fontFamily: 'Montserrat_400Regular'
    },
})

export default SearchInput;