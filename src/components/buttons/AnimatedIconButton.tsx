import React, {useCallback, useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import {deviceLayoutMetric} from '../../constants/utils';

interface IAnimatedIcon {
  onPress: () => void;
}

const AnimatedButton: React.FC<IAnimatedIcon> = ({onPress}) => {
  const [icon, setIcon] = useState<'close' | 'search'>('search');
  const scale = useSharedValue(1);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
    opacity: scale.value,
  }));

  const toggleSearchIcon = () => {
    setIcon(prev => (prev === 'close' ? 'search' : 'close'));
  };

  const triggerAnimation = useCallback(() => {
    scale.value = withTiming(
      0,
      {duration: 300, easing: Easing.inOut(Easing.ease)},
      () => {
        runOnJS(toggleSearchIcon)();
        scale.value = withTiming(1, {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        });
      },
    );
  }, [scale,icon]);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        triggerAnimation();
      }}>
      <Animated.View style={animatedIconStyle}>
        <Ionicons name={icon} size={24} color="black" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  searchInput: {
    height: 40,
    width: '100%',
  },
  searchContent: {
    width: deviceLayoutMetric.deviceWidth - 10,
    backgroundColor: 'red',
    zIndex: 999,
    position: 'absolute',
    top: 50,
    right: -5,
  },
});

export default AnimatedButton;
