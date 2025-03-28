import { useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Link } from 'expo-router';
import logo from './assets/images/logo.png';
import menu from './assets/icons/menu.png';
import add from './assets/icons/add.png';
//import { images } from './components/imageSource';


import styles from './style';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const router = useRouter();
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        {/* Header */}
        <View style={{ paddingTop: 10, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
          <View style={{ flex: 1 }}>
          <Pressable onPress={() => router.push("/app/dashboard")}>
            <Image style={styles.icon} source={menu} />
            </Pressable>
          </View>
          <View style={{ flex: 3, alignItems: 'center' }}>
            <Image style={styles.centerLogoImg} source={logo} />
          </View>
          <View style={{ flex: 1 }}>
            <Image style={styles.addIcon} source={add} />
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ paddingVertical: 50 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 140, width: 140, borderRadius: 70, backgroundColor: '#531D9A' }}>
              <View style={{ height: 110, width: 110, borderRadius: 55, backgroundColor: '#A46FE9' }}>
              </View>
            </View>
          </View>
          <Text style={{fontSize: 28, fontFamily: 'Roboto-Medium', textAlign: 'center', color: '#F4112F'}}>Keep chilling</Text>
          <View style={{paddingTop: 12}}>
            <Text style={{fontSize: 20, fontFamily: 'Roboto-Medium', textAlign: 'center', lineHeight: 24, color: '#FFFFFF'}}>Your monitor is {"\n"} running smoothly.</Text>
          </View>
        </View>

        <View style={{paddingVertical: 12}}>
            <Text>Recent alerts</Text>
        </View>

      </SafeAreaView>
  );
}
