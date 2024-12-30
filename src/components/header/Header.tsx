import {FC, ReactNode, useState} from 'react';
import {View, ViewStyle, StyleProp, StyleSheet, Text} from 'react-native';
import GoBack from './GoBack';
import {theme} from '../../theme';
import SearchHeader from '../search';

type Props = {
  title?: string;
  goBack?: boolean;
  style?: StyleProp<ViewStyle>;
  search?: boolean;
};

const Header: FC<Props> = ({
  goBack,
  title,
  style,
  search = false,
}): ReactNode => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <View
      style={[
        theme.layout.flexDirectionRow,
        theme.layout.alignCenter,
        theme.layout.widthDevice,
        theme.layout.gap,
        theme.layout.paddingX,
        styles.container,
        style,
      ]}>
      {goBack && <GoBack />}
      {!isSearchActive && (
        <Text
          style={[
            theme.text.font_18,
            theme.text.colorBlack,
            theme.text.upperCase,
          ]}
          numberOfLines={1}>
          {title}
        </Text>
      )}
      {search && <SearchHeader setIsSearchActive={setIsSearchActive} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderBottomWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default Header;
