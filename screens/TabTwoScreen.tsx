import { StyleSheet, TouchableOpacity } from 'react-native';
import SearchInput from '../components/SearchInput';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

const recentSearches = [
  'Salotto',
  'Amalfi Coast',
  'Michaelengo',
  'Da vinci',
  'Salotto',
  'Amalfi Coast',
  'Michaelengo',
  'Da vinci',
]

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#143F6B',
          height: 201,
          width: 395,
        }}
      >
        <Text style={{ fontFamily: 'Montserrat_800ExtraBold', fontSize: 26, color: '#fff', top: 70, left: 30 }}>Search</Text>
        <View style={{ position: 'absolute', zIndex: 9999, paddingHorizontal: 30, backgroundColor: 'transparent', width: 375 }}>
          <SearchInput style={{ top: 120 }} />
        </View>
      </View>
      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <Text style={{ fontFamily: 'Montserrat_500Medium', marginBottom: 20 }}>RECENT SEARCHES</Text>
        {
          recentSearches.map((val, index) => {
            return (<Text key={index} style={{ color: Colors.primary, paddingVertical: 10, fontSize: 14 }}>{val}</Text>)
          })
        }
      </View>
    </View>
  );
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
});
