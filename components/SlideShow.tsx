import React from 'react';
import {View, Image, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import images from '../assets/image';
import Swiper from 'react-native-swiper';
import useNavigation from '@react-navigation/native';
const data = [
  {
    image: images.onboard1,
    title: 'Manage Your Budgeting',
    desc: 'Easy manage your income and expense into category.',
  },
  {
    image: images.onboard3,
    title: 'Track Your Expense',
    desc: 'Easy tracking and find your most spending at.',
  },
  {
    image: images.onboard2,
    title: 'Set Your Goal',
    desc: 'You can set goals for your income and expense.',
  },
];

const SlideShow = () => {
  const Navigation = useNavigation();
  const handleNavigationHome = () => {
    Navigation.navigate('Home');
  };
  // const handleNavigationHalamanLain = () => {
  //   navigation.navigate('Halamanlain');
  // };
  return (
    <Swiper>
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.cardButton}>
            <TouchableOpacity onPress={handleNavigationHome}>
              <Text>Skip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardImage}>
            <Image
              source={item.image}
              style={{flex: 1}}
              resizeMode="cover"
              style={{
                width: 230,
                height: 200,
                marginTop: 200,
              }}
            />
          </View>
          <View style={styles.textcard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        </View>
      ))}
    </Swiper>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  cardButton: {
    height: '15%',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10,
    padding: '5%',
  },
  cardImage: {
    height: '40%',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textcard: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#dfdfdf',
    marginBottom: 10,
    marginTop: 100,
    flex: 1,
    height: '45%',
    width: '100%',
    padding: '5%',
  },
  title: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    color: 'black',
    fontSize: 15,
  },
  tombol: {
    marginTop: 10,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
  },
});
export default SlideShow;
