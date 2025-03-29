import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import arrowRight from '../assets/icons/arrowRight.png';
import more from '../assets/icons/more.png';
import notificationFill from '../assets/icons/notificationFill.png';
import dropdown from '../assets/icons/dropdown.png';
import styles from './style';

export default function BackHeader() {
    return (
        <View style={styles.backHeaderContainer}>
            <View style={styles.contentAlign}>
                <Link href="/" >
                    <Image style={styles.icon} source={arrowRight} />
                </Link>
                <Text style={styles.headerText}>YouTube</Text>
            </View>
            <View style={[styles.contentAlign, styles.rightAlign]}>
                <Text style={styles.mediumText}>7d</Text>
                <Image style={styles.icon} source={dropdown} />
                <Image style={styles.icon} source={notificationFill} tintColor={'#5A00D1'} />
                <Image style={styles.icon} source={more} />
            </View>
        </View>
    );
}