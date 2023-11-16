import React from 'react';
import {View, Image, StyleSheet, Text, Button} from 'react-native';
import Swiper from 'react-native-swiper';

const SlideShows = () => {
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  ];
  // let pic = {
  //   uri: '../assets/image/spash.png',
  // };
  return (
    <Swiper>
       {data.map((image, index) => (
        <View key={index} style={styles.container}>
          <Button title="Skip" style={styles.tombol}/>
          <Image
            source={{uri: image}}
            style={{flex: 1}}
            resizeMode="cover"
            style={{
              width: 260,
              height: 230,
              marginTop: 50,
            }}
          /> 
          {/* <Image source={pic} style={{width: 193, height: 110, marginTop: 50}}/> */}
           <Text style={styles.texts}>jkdbfjkdf</Text>
        </View>
      ))} 
     </Swiper>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    alignContent: 'center',
    alignItems: 'center'
  },
  images: {
    flex: 1,
  },
  texts:{
    color:'black',
    fontSize:30,
    marginTop:20
  },
  tombol:{
    marginTop:10,
    backgroundColor:'white',
    color:'black'
  }
});
export default SlideShows;
