import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  runOnJS,
  SharedValue,
  useAnimatedReaction,
} from 'react-native-reanimated';
import {deviceLayoutMetric} from '../../constants/utils';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../redux/store';
import SearchContent from './SearchContent';
import {
  clearSearch,
  searchMoviesRequest,
} from '../../redux/actions/searchActions';
import useDebounce from '../../hooks/useDebounce';
import AnimatedButton from '../buttons/AnimatedIconButton';

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

  const blurInput =()=>{
    ref.current?.blur();
  }

  useAnimatedReaction(
    () => {
      return animation.value;
    },
    (value, previousValue) => {
      if (value === 1 && previousValue === 0) {
        runOnJS(focusInput)();
      }
      if(value === 0 &&  previousValue === 1){
        runOnJS(blurInput)();
      }
    },
    [animation],
  );

  return (
    <Animated.View style={[styles.searchContainer, animatedStyle]}>
      <Animated.View
        style={[
          {
            width: '85%',
            backgroundColor: '#e0e0e0',
            borderRadius: 20,
            alignSelf: 'center',
          },
          animatedSearchStyle,
        ]}>
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

export default AnimatedTextInput;
