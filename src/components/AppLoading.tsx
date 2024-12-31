import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useTypedSelector} from '../redux/store';
import {theme} from '../theme';

const AppLoading: React.FC = () => {
  const isLoading = useTypedSelector(state => state.globalState.loading);

  if (!isLoading) return null;
  return (
    <View style={style.container}>
      <ActivityIndicator />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    ...theme.layout.widthDevice,
    ...theme.layout.deviceHeight,
    ...theme.layout.pAbsolute,
    ...theme.layout.alignCenter,
    ...theme.layout.justifyCenter,
  },
});

export default AppLoading;
