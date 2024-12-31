import React, {useRef} from 'react';
import {
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import Animated, {
  withTiming,
  useAnimatedStyle,
  runOnJS,
  SharedValue,
  useAnimatedReaction,
} from 'react-native-reanimated';
import {deviceLayoutMetric} from '../../constants/utils';

const AnimatedTextInput = ({
  animation,
  onChangeText,
  value,
  onBlur,
}: {
  animation: SharedValue<number>;
  onChangeText: ((text: string) => void) | undefined;
  value?: string;
  onBlur:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}) => {
  const ref = useRef<TextInput>(null);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value === 1
          ? withTiming(deviceLayoutMetric.deviceWidth * 0.76, {duration: 500})
          : withTiming(0, {duration: 500}),
    };
  });

  const animatedSearchStyle = useAnimatedStyle(() => {
    return {
      paddingLeft:
        animation.value === 1
          ? withTiming(15, {duration: 500})
          : withTiming(0, {duration: 1000}),
    };
  });

  const focusInput = () => {
    ref.current?.focus();
  };

  const blurInput = () => {
    ref.current?.blur();
  };

  useAnimatedReaction(
    () => {
      return animation.value;
    },
    (value, previousValue) => {
      if (value === 1 && previousValue === 0) {
        runOnJS(focusInput)();
      }
      if (value === 0 && previousValue === 1) {
        runOnJS(blurInput)();
      }
    },
    [animation],
  );

  return (
    <Animated.View style={[styles.searchContainer, animatedStyle]}>
      <Animated.View style={[styles.inputWrapper, animatedSearchStyle]}>
        <TextInput
          style={[styles.searchInput]}
          ref={ref}
          placeholder="Search"
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
        />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: '85%',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    alignSelf: 'center',
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
});

export default AnimatedTextInput;
