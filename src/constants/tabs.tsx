import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TTabs } from '../types/navigationTypes/TabNavigatorParamList';

export const tabs: TTabs[] = [
  {
    name: 'Home',
    label: 'Anasayfa',
    icon: <Ionicons name="home-outline" size={24} color="black" />,
    activeIcon: <Ionicons name="home" size={24} color="black" />,
  },
  {
    name: 'Favorite',
    label: 'Favoriler',
    icon: <Ionicons name="heart-outline" size={24} color="black" />,
    activeIcon: <Ionicons name="heart" size={24} color="black" />,
  },
];
