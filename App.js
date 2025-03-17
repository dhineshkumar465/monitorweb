import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Link, Stack, useRouter } from 'expo-router';

import styles from './style';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const router = useRouter();

  const loadFonts = async () => {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Keeps splash screen visible until fonts load
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Link href="/home">View details</Link>
    {/* <Text onPress={() => router.push('/home')} style={{fontFamily: 'Roboto-Regular'}}>Open up index.js to start working on your app!</Text> */}
  </View>
  );
}
