import React from 'react';
import {TouchableOpacity, Dimensions, Text} from 'react-native';
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
      style={{
        alignItems: 'center',
        width: (deviceLayoutMetric.deviceWidth - 40) / 2,
        zIndex: 10,
      }}>
      {tab.icon}
      <Text
        style={[
          {
            textAlign: 'center',
            textTransform: 'uppercase',
            marginTop: 4,
            color: 'black',
          },
        ]}>
        {tab.label || tab.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;
