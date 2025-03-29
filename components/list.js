import { View, Text, Image } from 'react-native';
import { getStatusImg } from '../helpers/utils';
import styles from './style';

export default function List({ listData }) {
    return (
        <View style={styles.listLayout}>
            <View style={styles.alertContainer}>
                <View style={styles.alertWrap}>
                    <Text style={styles.alertText}>Recent alerts</Text>
                </View>
            </View>
            {
                listData.map((item, index) => (
                    <View key={index} style={styles.listContainer}>
                        <View style={styles.listWrap}>
                            <View style={styles.textLayout}>
                                <Text style={styles.listMaintext}>{item.text}</Text>
                                <Text style={styles.listSubText}>{item.period}</Text>
                            </View>
                            <View style={styles.imgLayout}>
                                <Image style={styles.listIcon} source={getStatusImg(item.status)} />
                            </View>
                        </View>
                    </View>
                ))
            }
            <View style={{ paddingTop: 20 }}>
                <Text style={styles.endText}>That's all folks!</Text>
            </View>
        </View>
    );
}