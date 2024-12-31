import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {TTabs} from '../../types/navigationTypes/TabNavigatorParamList';
import {deviceLayoutMetric} from '../../constants/utils';

type Props = {
  tab: TTabs;
  currentTabScreen: string;
};

const TabItem: React.FC<Props> = ({tab, currentTabScreen}): JSX.Element => {
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate('TabNavigator', {screen: tab.name})}
      style={style.container}>
      {tab.icon}
      <Text style={style.label}>{tab.label || tab.name}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: (deviceLayoutMetric.deviceWidth - 40) / 2,
    zIndex: 10,
  },
  label: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 4,
    color: 'black',
  },
});

export default TabItem;
