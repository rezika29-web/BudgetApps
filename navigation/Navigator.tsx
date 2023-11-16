import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home'; // Import halaman baru yang sudah dibuat
import SlideShow from '../components/SlideShow';
import React from 'react';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="SlideShow">
      <Stack.Screen name="SlideShow" component={SlideShow} />
      <Stack.Screen name="Home" component={Home} />
      {/* Tambahkan layar-layar lain di sini jika diperlukan */}
    </Stack.Navigator>
  );
};

export default Navigator;
