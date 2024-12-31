import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailScreen from '../screen/DetailScreen/DetailScreen';
import TabNavigator from './TabNavigator';
import {TRootStackParamlis} from '../types/navigationTypes/RootStackParamList';
import ArtistDetail from '../screen/CastScreen/CastScreen';

const Stack = createStackNavigator<TRootStackParamlis>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="ArtistDetail" component={ArtistDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
