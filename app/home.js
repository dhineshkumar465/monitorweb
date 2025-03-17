import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './style';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container} >
      <Text onPress={() => router.push('/')} style={{fontFamily: 'Roboto-Regular'}}>Open up home.js to start working on your app!</Text>
    </View>
  );
}
