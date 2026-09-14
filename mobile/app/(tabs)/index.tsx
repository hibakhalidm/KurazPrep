import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SubjectsScreen() {
  const router = useRouter();

  // Placeholder data
  const subjects = [
    { id: '1', name: 'Physics', stream: 'Natural', grade: 12 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Subjects</Text>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => router.push(`/subject/${item.id}`)}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>Grade {item.grade} • {item.stream} Stream</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#333' },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#0D7377' },
  cardSubtitle: { fontSize: 14, color: '#666', marginTop: 4 }
});
