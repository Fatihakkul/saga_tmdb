import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TTabs } from '../types/navigationTypes/TabNavigatorParamList';

export const tabs: TTabs[] = [
  {
    name: 'Home',
    label: 'Anasayfa',
    icon: <AntDesign name="home" size={24} color="black" />, // JSX öğesi olarak ikon
  },
  {
    name: 'Favorite',
    label: 'Favoriler',
    icon: <AntDesign name="hearto" size={24} color="black" />, // JSX öğesi olarak ikon
  },
];
