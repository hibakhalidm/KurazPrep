import { View, Text, StyleSheet } from 'react-native';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Progress Dashboard</Text>
      <Text style={styles.text}>Your quiz analytics will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  text: { fontSize: 16, color: '#666', marginTop: 8 }
});
