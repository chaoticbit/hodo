import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SearchInput from '../components/SearchInput';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import { PlaceToVisitListItem } from './RecommendedResultsScreen';

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

const places = ["Positano", "Amalfi Coast Beaches", "Fiordo di Furore", "Cinque Terre", "Amalfi Coast Boat Tours", "Amalfi Coast Hiking", "Piazzale Michelangelo", "Piazza dei Miracoli", "Piazza del Duomo", "Grand Canal"]

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [loading, setLoading] = useState<boolean>();
  const [finishedSubmitting, setFinishSubmitting] = useState<boolean>();

  useEffect(() => {
    setLoading(false);
    setFinishSubmitting(false);
  }, []);

  function handleSubmitEditing(event: any) {
    setFinishSubmitting(true);
  }

  function handleChangeText(newText: string) {
    if (newText === '') {
      setFinishSubmitting(false);
    }
  }

  const SearchView = () => {
    return (
      <>
        <ScrollView horizontal={false} contentContainerStyle={{ paddingTop: 10, alignItems: 'center', height: 1500 }}>
          {
            places.map((place, index) => {
              return (<PlaceToVisitListItem key={index} name={place} />)
            })
          }
        </ScrollView>
      </>
    )
  }

  const RecentSearchesView = () => {
    return (
      <>
        <Text style={{ fontFamily: 'Montserrat_500Medium', marginBottom: 20 }}>RECENT SEARCHES</Text>
        {
          recentSearches.map((val, index) => {
            return (<Text key={index} style={{ color: Colors.primary, paddingVertical: 10, fontSize: 14 }}>{val}</Text>)
          })
        }
      </>
    )
  }

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
          <SearchInput style={{ top: 120 }} onChangeText={handleChangeText} onSubmitEditing={handleSubmitEditing} />
        </View>
      </View>
      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        {
          finishedSubmitting ? <SearchView /> : (<RecentSearchesView />)
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
