import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
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
import { theme } from '../../theme';

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
    ...theme.layout.flexDirectionRow,
    ...theme.layout.justifyCenter,
    ...theme.layout.alignCenter,
    ...theme.layout.pAbsolute,
    padding: 10,
    right: 10,
    top: 0,
    bottom: 0,
  },
});

export default SearchHeader;
