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
    right: 0
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
  }
});
export default styles