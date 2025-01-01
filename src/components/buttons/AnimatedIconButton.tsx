import React, {useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

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
  }, [scale, icon]);

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

export default AnimatedButton;
