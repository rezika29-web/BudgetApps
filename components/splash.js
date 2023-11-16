import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreens = () => {
  useEffect(() => {
    // Hide the SplashScreen after a delay (e.g., 2 seconds)
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/spash.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Selamat Datang!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Ganti dengan warna latar belakang yang sesuai
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color:'black'
  },
});

export default SplashScreens;
