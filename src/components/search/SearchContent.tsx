import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  withTiming,
  useAnimatedStyle,
  SharedValue,
} from 'react-native-reanimated';
import {deviceLayoutMetric} from '../../constants/utils';
import {useTypedSelector} from '../../redux/store';
import {Movie} from '../../types/movieType';
import SearchItem from '../items/SearchItem';
import {ListSeperator} from '..';
import {createGetItemLayout} from '../../constants/helpers';

interface ISearchContentProps {
  animation: SharedValue<number>;
}

const SearchContent: React.FC<ISearchContentProps> = ({animation}) => {
  const {movies} = useTypedSelector(state => state.search);

  const animatedContenttyle = useAnimatedStyle(() => {
    return {
      height:
        animation.value === 1
          ? withTiming(deviceLayoutMetric.deviceHeight * 0.5, {
              duration: 500,
            })
          : withTiming(0, {duration: 500}),
    };
  });

  const renderItem = ({item}: {item: Movie}) => {
    return <SearchItem item={item} />;
  };

  const horizontalGetItemLayout = useMemo(
    () => createGetItemLayout(160, 10),
    [],
  );

  return (
    <Animated.View style={[styles.searchContent, animatedContenttyle]}>
      <Animated.FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={animatedContenttyle}
        ItemSeparatorComponent={() => <ListSeperator vertical />}
        getItemLayout={horizontalGetItemLayout}
        initialNumToRender={Math.ceil(movies.length / 2)}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  searchContent: {
    width: deviceLayoutMetric.deviceWidth - 10,
    backgroundColor: 'white',
    zIndex: 999,
    position: 'absolute',
    top: 50,
    right: -5,
    paddingTop: 10,
  },
});

export default SearchContent;
