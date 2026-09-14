import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function SubjectDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Subject: {id}</Text>
      <Text style={styles.text}>Units list goes here.</Text>
      
      <View style={{height: 20}} />
      <Button title="View Example Note" onPress={() => router.push(`/note/note-1`)} />
      <View style={{height: 10}} />
      <Button title="Start Quiz" onPress={() => router.push(`/quiz/active`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold' },
  text: { fontSize: 16, marginTop: 10 }
});
