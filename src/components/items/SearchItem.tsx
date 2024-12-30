import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../../types/movieType';
import React, {memo} from 'react';
import {deviceLayoutMetric} from '../../constants/utils';
import FastImage from 'react-native-fast-image';
import {theme} from '../../theme';
import {useAppNavigation} from '../../hooks/useAppNavigation';

interface ISearchItem {
  item: Movie;
}

const SearchItem: React.FC<ISearchItem> = ({item}) => {
  const navigation = useAppNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Detail', {movieId: item.id})}>
      <View style={[style.container]}>
        <View style={style.imageWrapper}>
          <FastImage
            source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
            style={{width: 100, height: 160}}
            resizeMode="stretch"
          />
        </View>
        <View
          style={[
            style.infoWrapper,
            theme.layout.justifyCenter,
            theme.layout.gap,
          ]}>
          <Text>{item.title}</Text>
          <Text>{item.vote_average.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    width: deviceLayoutMetric.deviceWidth,
    height: 160,
    ...theme.layout.flexDirectionRow,
    ...theme.layout.gap,
  },
  imageWrapper: {
    borderRadius: 10,
    height: 160,
    width: 100,
    overflow: 'hidden',
  },
  infoWrapper: {},
});
export default memo(SearchItem);
