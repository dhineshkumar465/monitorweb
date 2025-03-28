import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#110126'
      },
      text: {
        fontSize: 28, 
        tFamily: 'Roboto-Medium', 
        color: '#ffffff', 
        lineHeight: 36
      },
      inlineText: {
        color: '#ff0000'
      },
      subText: {
        fontSize: 14, 
        fontFamily: 'Roboto-Regular', 
        color: '#ffffff', 
        lineHeight: 20
      },
      centerLogoImg: {
        resizeMode: 'cover',
        maxHeight: 50,
        //maxWidth: 300
      },
      menuIcon: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
      },
      addIcon: {
        height: 18,
        width: 18,
        resizeMode: 'contain'
      }
      
});
export default styles