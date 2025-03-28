import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#110126'
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
      },
      contentCenter: {
        alignItems: 'center'
      }
});
export default styles