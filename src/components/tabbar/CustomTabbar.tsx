import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {tabs} from '../../constants/tabs';
import TabItem from './TabItem';
import {theme} from '../../theme';

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

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    ...theme.backgorunds.bgWhite,
    ...theme.layout.alignCenter,
    ...theme.layout.justifyBetween,
    ...theme.layout.flexDirectionRow,
    ...theme.borders.borderTop,
  },
});
