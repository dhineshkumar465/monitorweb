import { View, Image } from 'react-native';
import logo from '../assets/images/logo.png';
import menu from '../assets/icons/menu.png';
import add from '../assets/icons/add.png';
import styles from './style';

export default function Header() {
    return (
        <View style={styles.headerWrap}>
            <View style={styles.container}>
                <Image style={styles.icon} source={menu} />
            </View>
            <View style={styles.midContainer}>
                <Image style={styles.centerLogoImg} source={logo} />
            </View>
            <View style={styles.endContainer}>
                <Image style={styles.addIcon} source={add} />
            </View>
        </View>
    );
}