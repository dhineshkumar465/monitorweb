import { NativeModules, LayoutAnimation } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './home';
import Monitor from './monitor';
import Fotter from '../../components/fotter';
import styles from './style';

const {UIManager} = NativeModules;

UIManager && UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function Dashboard() {
  const [monitor, setMonitor] = useState(false);
  const fotterValChange = (val) => {
    if (val !== monitor) {
      LayoutAnimation.linear();
      setMonitor(val);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      {
        monitor === false && (
          <Home />
        )
      }
      {
        monitor !== false && (
          <Monitor />
        )
      }
      <Fotter monitorVal={monitor} fotterValChange={fotterValChange} />
    </SafeAreaView>
  );
}