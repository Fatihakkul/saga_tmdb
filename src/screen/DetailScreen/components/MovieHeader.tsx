import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {FavoriteButton} from '../../../components';
import {theme} from '../../../theme';
import {Movie, MovieDetail} from '../../../types/movieType';
import { isTablet } from '../../../constants/utils';
import { scale } from 'react-native-size-matters';

interface IMovieHeaderProps {
  movie: MovieDetail;
  convertedMovie: Movie;
}

const MovieHeader: React.FC<IMovieHeaderProps> = ({movie, convertedMovie}) => (
  <ImageBackground
    source={{uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}}
    resizeMode="stretch"
    style={styles.coverImage}>
    <View style={[theme.layout.pAbsolute, styles.favoriteButton]}>
      <FavoriteButton movie={convertedMovie} />
    </View>
  </ImageBackground>
);

export const styles = StyleSheet.create({
  favoriteButton: {
    bottom: 10,
    right: 15,
  },
  coverImage: {
    width: '100%',
    height: scale(200),
    borderRadius: 10,
  },
});

export default MovieHeader;
