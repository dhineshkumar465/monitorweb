import { Text, View, ScrollView } from 'react-native';
import { listData } from '../../helpers/utils';
import Header from '../../components/header';
import List from '../../components/list';
import styles from './style';

export default function Home() {
    return (
        <>
            <Header />
            <ScrollView>
                <View style={styles.contentCenter}>
                    <View style={{ paddingVertical: 40 }}>
                        <View style={styles.outerCircle}>
                            <View style={styles.innerCircle}>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.mainText}>Keep chilling</Text>
                    <View style={{ paddingTop: 12 }}>
                        <Text style={styles.subText}>Your monitor is {"\n"} running smoothly.</Text>
                    </View>
                </View>
                <List listData={listData} />
            </ScrollView>
        </>
    );
}