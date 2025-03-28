import { useEffect } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import logo from '../assets/images/logo.png';
import homeImg from '../assets/images/home_img.png';

import styles from './style';

export default function Dashboard() {
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load images
        await Asset.loadAsync([require("../assets/images/splash-icon.png")]);

        // Load fonts
        await Font.loadAsync({
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.logoImg} source={logo} />
          <Image style={styles.dashboardImg} source={homeImg} />
        </View>
        <Text style={styles.text}>Welcome to the
          <Text style={styles.inlineText}> Monitoringweb</Text> ecosystem</Text>
        <View style={{ paddingVertical: 30 }}>
          <Text style={styles.subText}>With a FREE account you'll get access to distributed monitoring infrastructure with double-checks, advaced web app and Status Pages.</Text>
        </View>
        <Link href="/home" asChild>
          <Pressable style={styles.buttonWrap}>
            <LinearGradient
              colors={['#EF1133', '#5A00D1']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>CONTINUE</Text>
            </LinearGradient>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
