import { Text, View, Image, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import logo from '../assets/images/logo.png';
import menu from '../assets/icons/menu.png';
import add from '../assets/icons/add.png';
import upload from '../assets/icons/upload.png';
import play from '../assets/icons/play_circle.png';
import home from '../assets/icons/home.png';
import monitorImg from '../assets/icons/monitor.png';
import styles from './style';

export default function Home() {
  const [monitor, setMonitor] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={{ paddingTop: 10, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
        <View style={{ flex: 1 }}>
          <Image style={styles.icon} source={menu} />
        </View>
        <View style={{ flex: 3, alignItems: 'center' }}>
          <Image style={styles.centerLogoImg} source={logo} />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Image style={styles.addIcon} source={add} />
        </View>
      </View>

      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <View style={{ paddingVertical: 40 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 140, width: 140, borderRadius: 70, backgroundColor: '#531D9A' }}>
              <View style={{ height: 110, width: 110, borderRadius: 55, backgroundColor: '#A46FE9' }}>
              </View>
            </View>
          </View>
          <Text style={{ fontSize: 28, fontFamily: 'Roboto-Medium', textAlign: 'center', color: '#F4112F' }}>Keep chilling</Text>
          <View style={{ paddingTop: 12 }}>
            <Text style={{ fontSize: 20, fontFamily: 'Roboto-Medium', textAlign: 'center', lineHeight: 24, color: '#FFFFFF' }}>Your monitor is {"\n"} running smoothly.</Text>
          </View>
        </View>

        <View style={{ paddingVertical: 20 }}>
          <View style={{ height: 1, width: '100%', backgroundColor: '#350A6D', position: 'relative' }}>
            <View style={{ position: 'absolute', top: -10, left: '40%', elevation: 5, backgroundColor: '#110126' }}>
              <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', color: '#ffffff', paddingHorizontal: 10 }}>Recent alerts</Text>
            </View>
          </View>

          <View style={{ marginTop: 20, width: '100%', backgroundColor: '#5A00D1', paddingVertical: 10, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold', color: '#ffffff' }}>YouTube is up</Text>
                <Text style={{ paddingTop: 5, fontSize: 12, fontFamily: 'Roboto-Medium', color: '#ffffff' }}>1 month ago</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Image style={styles.addIcon} source={upload} />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20, width: '100%', backgroundColor: '#5A00D1', paddingVertical: 10, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold', color: '#ffffff' }}>YouTube has started</Text>
                <Text style={{ paddingTop: 5, fontSize: 12, fontFamily: 'Roboto-Medium', color: '#ffffff' }}>2 Seconds ago</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Image style={styles.listIcon} source={play} />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', color: '#ffffff', textAlign: 'center' }}>That's all folks!</Text>
          </View>
        </View>
      </ScrollView>

      <View style={{ height: 65, width: '100%', position: 'absolute', elevation: 5, bottom: 0, right: 0 }}>
        <View style={{ height: 0.5, opacity:0.5, width: '100%', backgroundColor: '#B680FF' }}></View>
        <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '50%', alignItems: 'center' }}>
            <Image style={styles.icon} source={home} tintColor={'#5A00D1'} />
            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Bold', color: '#5A00D1' }}>Home</Text>
          </View>
          <View style={{ width: '50%', alignItems: 'center' }}>
            <Image style={styles.icon} source={monitorImg} />
            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Bold', color: '#fff' }}>Monitors</Text>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}
