import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#110126'
    },
    centerLogoImg: {
        resizeMode: 'cover',
        maxHeight: 50
    },
    menuIcon: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    listIcon: {
        maxHeight: 30,
        maxWidth: 30,
        resizeMode: 'contain'
    },
    addIcon: {
        height: 18,
        width: 18,
        resizeMode: 'contain'
    },
    contentCenter: {
        alignItems: 'center'
    },
    rowCenter: {
        flex:1, 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    outerCircle: {
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 140, 
        width: 140, 
        borderRadius: 70, 
        backgroundColor: '#531D9A'
    },
    innerCircle: {
        height: 110, 
        width: 110, 
        borderRadius: 55, 
        backgroundColor: '#A46FE9'
    },
    mainText: {
        fontSize: 28, 
        fontFamily: 'Roboto-Medium', 
        textAlign: 'center', 
        color: '#F4112F'
    },
    subText: {
        fontSize: 20, 
        fontFamily: 'Roboto-Medium', 
        textAlign: 'center', 
        lineHeight: 24, 
        color: '#FFFFFF'
    },
    smallText: {
        fontSize: 12,
        fontFamily: 'Roboto-Medium',
        color: '#fff',
        paddingLeft: 8
    },
    textLayout: {
        padding: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    boldText: {
        fontSize: 20, 
        fontFamily: 'Roboto-Bold', 
        color: '#ffffff'
    },
    normalText: {
        fontSize: 12, 
        fontFamily: 'Roboto-Regular', 
        color: '#fff'
    }
});
export default styles