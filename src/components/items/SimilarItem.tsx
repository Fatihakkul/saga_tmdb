import {Pressable, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Movie} from '../../types/movieType';
import React, {memo} from 'react';

interface ISimilarProps {
  item: Movie;
}
const SimilarItem: React.FC<ISimilarProps> = ({item}) => {
  const navigation = useAppNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Detail', {movieId: item.id})}>
      <View style={styles.container}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
            priority: FastImage.priority.high,
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default memo(SimilarItem);
