import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
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
import AnimatedTextInput from './SearchInput';

const SearchHeader = ({
  setIsSearchActive,
}: {
  setIsSearchActive: (active: boolean) => void;
}) => {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 500);
  const dispatch = useDispatch();
  const movies = useTypedSelector(state => state.search.movies);
  const animation = useSharedValue(0);

  const toggleSearch = useCallback(() => {
    const newValue = animation.value === 1 ? 0 : 1;
    animation.value = newValue;
    setIsSearchActive(newValue === 1);
    setSearchText('');
    dispatch(clearSearch());
  }, [movies.length, searchText, dispatch, animation]);

  const onSearchBlur = () => {
    if (searchText.length === 0) {
      animation.value = 0;
      setIsSearchActive(false);
      setSearchText('');
      dispatch(clearSearch());
    }
  };

  useEffect(() => {
    if (debouncedSearchText) {
      dispatch(searchMoviesRequest(debouncedSearchText));
    } else {
      dispatch(clearSearch());
    }
  }, [debouncedSearchText, dispatch]);

  return (
    <View style={styles.container}>
      <AnimatedTextInput
        onChangeText={setSearchText}
        value={searchText}
        onBlur={onSearchBlur}
        animation={animation}
      />
      <AnimatedButton onPress={toggleSearch} />
      <SearchContent animation={animation} />
    </View>
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

export default SearchHeader;
