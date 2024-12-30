import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import {View} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GoBack = () => {
  const navigation = useAppNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <AntDesign name="left" color={'black'} size={25} />
      </Pressable>
    </View>
  );
};

type TStyle = {
  container: ViewStyle;
};

const style = StyleSheet.create<TStyle>({
  container: {
    alignItems: 'center',
  },
});

export default GoBack;
