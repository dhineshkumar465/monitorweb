import { Text, View, Image, ScrollView } from 'react-native';
import { monitorData } from '../../helpers/utils';
import BackHeader from '../../components/backHeader';
import List from '../../components/list';

import styles from './style';

export default function Monitor() {
    return (
        <>
            <BackHeader />
            <ScrollView>
                <List listData={monitorData} />
            </ScrollView>
        </>
    );
}