import React from 'react';
import {StyleSheet} from 'react-native';
import {StyleProp, View, ViewStyle} from 'react-native';

interface ISeperatorProps {
  style?: StyleProp<ViewStyle>;
  vertical?: boolean;
}

const ListSeperator: React.FC<ISeperatorProps> = ({
  style,
  vertical = false,
}) => {
  return (
    <View
      style={[vertical ? styles.verticalStyle : styles.horizontalStyle, style]}
    />
  );
};

const styles = StyleSheet.create({
  horizontalStyle: {
    width: 10,
  },
  verticalStyle: {
    height: 10,
  },
});
export default ListSeperator;
