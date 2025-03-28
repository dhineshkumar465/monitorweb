import { View, Text, Image, Pressable } from 'react-native';
import { getColor } from '../helpers/utils';
import home from '../assets/icons/home.png';
import monitorImg from '../assets/icons/monitor.png';
import styles from './style';

export default function Fotter({ monitorVal, fotterValChange }) {
    return (
        <View style={styles.fotterContainer}>
            <View style={styles.fotterWrap}>
                <Pressable style={styles.fotterLayout} onPress={() => fotterValChange(false)}>
                    <Image style={styles.icon} source={home} tintColor={getColor(!monitorVal)} />
                    <Text style={[styles.fotterText, { color: getColor(!monitorVal) }]}>Home</Text>
                </Pressable>
                <Pressable style={styles.fotterLayout} onPress={() => fotterValChange(true)}>
                    <Image style={styles.icon} source={monitorImg} tintColor={getColor(monitorVal)} />
                    <Text style={[styles.fotterText, { color: getColor(monitorVal) }]}>Monitors</Text>
                </Pressable>
            </View>
        </View>
    );
}