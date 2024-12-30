import { useNavigation } from '@react-navigation/native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TRootStackParamlis } from '../types/navigationTypes/RootStackParamList';
import { TabNavigatorParamList } from '../types/navigationTypes/TabNavigatorParamList';

type RootStackNavigationProp = StackNavigationProp<TRootStackParamlis>;

type TabNavigationNavigationProp = BottomTabNavigationProp<TabNavigatorParamList>;

export type AppNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  TabNavigationNavigationProp
>;

export const useAppNavigation = () => useNavigation<AppNavigationProp>();
