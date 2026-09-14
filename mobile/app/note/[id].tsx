import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Markdown from 'react-native-markdown-display';

export default function NoteReaderScreen() {
  const { id } = useLocalSearchParams();

  const markdownContent = `
# Markdown Note ${id}
This is a sample note rendered with markdown.

## Important Concepts
* Newton's First Law
* **F = ma**
  `;

  return (
    <ScrollView style={styles.container}>
      <Markdown>{markdownContent}</Markdown>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' }
});
