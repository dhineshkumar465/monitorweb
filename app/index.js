import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './style';

export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={styles.container} >
      <Text onPress={() => router.push('/home')} style={{fontFamily: 'Roboto-Regular'}}>Open up index.js to start working on your app!</Text>
    </View>
  );
}
