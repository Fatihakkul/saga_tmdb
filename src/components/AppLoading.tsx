import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import {useTypedSelector} from '../redux/store';
import { deviceLayoutMetric } from '../constants/utils';

const AppLoading: React.FC = () => {
  const isLoading = useTypedSelector(state => state.movie.loading);

  if (!isLoading) return null;
  return (
    <View style={style.container}>
      <ActivityIndicator />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
    height:deviceLayoutMetric.deviceHeight,
    width: deviceLayoutMetric.deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});

export default AppLoading;
