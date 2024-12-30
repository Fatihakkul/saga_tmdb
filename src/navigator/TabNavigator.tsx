import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/tabs/HomeScreen';
import FavoriteScreen from '../screen/tabs/FavoriteScreen';
import {TabNavigatorParamList} from '../types/navigationTypes/TabNavigatorParamList';
import BottomBar from '../components/tabbar/CustomTabbar';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator: React.FC = (): JSX.Element => {
  const tabbar = (props: BottomTabBarProps) => (
    <BottomBar currentTabScreen={props.state.routeNames[props.state.index]} />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true
      }}
      tabBar={tabbar}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
