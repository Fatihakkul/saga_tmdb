import {StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {tabs} from '../../constants/tabs';
import TabItem from './TabItem';

type Props = {
  currentTabScreen: string;
};

const BottomBar = ({currentTabScreen}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={[
          styles.root,
          {
            paddingBottom: insets.bottom,
          },
        ]}>
        {tabs.map((tab, index) => {
          return (
            <TabItem
              key={index}
              tab={tab}
              currentTabScreen={currentTabScreen}
            />
          );
        })}
      </View>
    </>
  );
};
export default BottomBar;

type Style = {
  root: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: 'white',
  },
});
