import { Text, View, Image, ScrollView } from 'react-native';
import { BarChart, LineChart } from "react-native-gifted-charts";
import { monitorData, layoutData } from '../../helpers/utils';
import upload from '../../assets/icons/upload.png';
import timer from '../../assets/icons/timer.png';
import BackHeader from '../../components/backHeader';
import List from '../../components/list';

import styles from './style';

export default function Monitor() {
    const waveData = [
        { value: 20 },
        { value: 80, label: "4:47AM" },
        { value: 40 },
        { value: 50, label: "9:47AM" },
        { value: 30 },
        { value: 50, label: "4:47AM" },
        { value: 20 },
        { value: 80, label: "9:47AM" },
        { value: 50 },
    ];
    const data = [{ value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 },
    { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 },
    { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }, { value: 4 }
    ];
    return (
        <>
            <BackHeader />
            <ScrollView>
                <View style={styles.textLayout}>
                    {layoutData.map((item, index) => (
                        <View key={index} style={styles.rowCenter}>
                            <Image style={styles.icon} source={item.image} />
                            <Text style={styles.smallText}>{item.text}</Text>
                        </View>
                    ))}
                </View>
                <View style={{ paddingHorizontal: 32, paddingVertical: 15, flex: 1, backgroundColor: '#5A00D1' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 38, width: 38, borderRadius: 19, backgroundColor: '#ffffff' }}></View>
                        <View style={{ paddingLeft: 12 }}>
                            <Text style={styles.boldText}>Operational</Text>
                            <Text style={{ paddingTop: 4, fontSize: 12, fontFamily: 'Roboto-Thin', color: '#ffffff' }}>Your services is
                                <Text style={{ color: '#ff0000' }}> up </Text>
                                for 1 second.</Text>
                        </View>
                    </View>
                </View>
                
                {/* Bar chart */}
                <View style={{ marginTop: 15, paddingHorizontal: 20, paddingVertical: 15, flex: 1, backgroundColor: '#353535' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.icon} source={upload} />
                            <Text style={{ paddingLeft: 8, fontSize: 20, fontFamily: 'Roboto-Bold', color: '#ffffff' }}>0.000%</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', color: '#ffffff' }}>7d average</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <BarChart
                            data={data}
                            initialSpacing={0}
                            spacing={5}
                            barWidth={5}
                            maxValue={5}
                            hideRules={true}
                            height={40}
                            xAxisLabelsHeight={0}
                            hideYAxisText={true}
                            hideAxesAndRules={true}
                            frontColor="#fff"
                        />
                        <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.normalText}>Sep 18</Text>
                            <Text style={styles.normalText}>Sep 20</Text>
                            <Text style={styles.normalText}>Sep 22</Text>
                            <Text style={styles.normalText}>Sep 24</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 12 }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', textAlign: 'center', color: '#ffffff' }}>No downtime detected in the last 7 days.</Text>
                    </View>
                </View>

                <View style={{ paddingTop: 16, paddingHorizontal: 20, flexDirection: 'row' }}>
                    <Image style={styles.icon} source={timer} />
                    <View style={{ paddingLeft: 15 }}>
                        <Text style={styles.boldText}>207.041 ms</Text>
                        <Text style={styles.normalText}>24 hours average</Text>
                    </View>
                </View>

                {/* Line Chart */}
                    <LineChart
                        data={waveData}
                        height={300}
                        initialSpacing={0}
                        isBezier              // Enables wave-like smooth curves
                        color={'#5B8FF9'}     // Line color
                        thickness={5}         // Line thickness
                        hideRules
                        hideYAxisText
                        maxValue={90}
                        curved={true}
                        curvature={0.2}
                        xAxisLabelsHeight={10}
                        xAxisLabelWidth={50}
                        yAxisLabelWidth={0}
                        yAxisThickness={0}
                        startFillColor={'rgba(91, 143, 249, 0.02)'} // Gradient fill for wave
                        endFillColor={'rgba(56, 56, 56, 0.13)'}   // Fades towards the bottom
                        startOpacity={0.4}
                        endOpacity={0.8}
                        xAxisLabelTextStyle={{ marginTop: -50, fontSize: 12, fontWeight: 'Roboto-Bold', color: '#fff' }}
                        xAxisThickness={0}
                        hideDataPoints={true}
                        areaChart
                    />

                <List listData={monitorData} />
            </ScrollView>
        </>
    );
}