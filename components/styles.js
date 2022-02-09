import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTopStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
  },
  textCenterStyle: {
    marginBottom:20,
    textAlign:'center',
    fontWeight:'bold', 
    fontSize: 25,
  },
  textBottomStyle: {
    padding:10,
    fontSize: 16,
    textAlign: 'center',
    color: '#AAAAAA',
  },
  buttonStyle:{
    alignItems: 'center',
    backgroundColor: '#FFBCBC',
    height: 40,
    marginTop: 10,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    fontWeight:'bold', 
  },
  ImgNavTabBottom: {
    width: 40,
    height: 40,
  },
  TextNavTabBotton: {fontSize: 20},
  NavTabBottom: {
    height: 70,
  },
  PageText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  Button: {
    alignItems: 'center',
    backgroundColor: '#AEFEFF',
    borderColor: '#ffffff',
    height: 40,
    marginTop: 10,
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  TextBotton: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    bottom: 10,
  },

});

export {styles};