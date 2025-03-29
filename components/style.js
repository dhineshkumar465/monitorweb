import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  midContainer: {
    flex: 3,
    alignItems: 'center'
  },
  endContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  headerWrap: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50
  },
  centerLogoImg: {
    resizeMode: 'cover',
    maxHeight: 50
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  addIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain'
  },
  fotterContainer: {
    height: 65,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    elevation: 5,
    backgroundColor: '#110126'
  },
  fotterWrap: {
    height: 65,
    borderTopWidth: 0.5,
    borderTopColor: '#B680FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fotterLayout: {
    width: '50%',
    alignItems: 'center'
  },
  fotterText: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold'
  },
  alertContainer: {
    height: 1,
    width: '100%',
    backgroundColor: '#350A6D',
    position: 'relative'
  },
  alertWrap: {
    position: 'absolute',
    top: -10,
    left: '40%',
    elevation: 5,
    backgroundColor: '#110126'
  },
  alertText: {
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    color: '#ffffff',
    paddingHorizontal: 10
  },
  listContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#5A00D1',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  listWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textLayout: {
    flex: 3
  },
  listMaintext: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#ffffff'
  },
  listSubText: {
    paddingTop: 5,
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    color: '#ffffff'
  },
  imgLayout: {
    flex: 1,
    alignItems: 'flex-end'
  },
  endText: {
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    color: '#ffffff',
    textAlign: 'center'
  },
  listLayout: {
    paddingTop: 30,
    paddingBottom: 90
  },
  backHeaderContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    borderBottomWidth: 0.5,
    borderBlockColor: '#350A6D'
  },
  contentAlign: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  headerText: {
    paddingLeft: 8, 
    fontSize: 20, 
    fontFamily: 'Roboto-Bold', 
    color: '#fff'
  },
  rightAlign: {
    justifyContent: 'flex-end'
  },
  mediumText: {
    fontSize: 14, 
    fontFamily: 'Roboto-Bold', 
    color: '#fff'
  }
});
export default styles