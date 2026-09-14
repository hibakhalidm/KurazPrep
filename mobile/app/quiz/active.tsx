import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ActiveQuizScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Question 1 of 10</Text>
      <Text style={styles.prompt}>What is the derivative of velocity?</Text>
      
      <View style={styles.options}>
        <Button title="A) Position" onPress={() => {}} />
        <View style={{height: 10}} />
        <Button title="B) Acceleration" onPress={() => router.back()} color="#0D7377" />
        <View style={{height: 10}} />
        <Button title="C) Jerk" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 18, color: '#666' },
  prompt: { fontSize: 22, fontWeight: 'bold', marginVertical: 20 },
  options: { marginTop: 20 }
});
