import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useAuthStore } from '../src/core/store/authStore';

export default function RootLayout() {
  const loadTokens = useAuthStore((state) => state.loadTokens);
  const isLoading = useAuthStore((state) => state.isLoading);

  useEffect(() => {
    loadTokens();
  }, []);

  if (isLoading) {
    return null; // Or a splash screen
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="subject/[id]" options={{ title: 'Subject' }} />
      <Stack.Screen name="note/[id]" options={{ title: 'Note' }} />
      <Stack.Screen name="quiz/active" options={{ title: 'Quiz', presentation: 'fullScreenModal' }} />
    </Stack>
  );
}
