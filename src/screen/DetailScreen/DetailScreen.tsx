import React, {useEffect, useMemo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../redux/store';
import {TRootStackParamlis} from '../../types/navigationTypes/RootStackParamList';
import {Movie} from '../../types/movieType';
import {Container, Header} from '../../components';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {fetchMovieDetailRequest} from '../../redux/actions/movieActions';
import {convertMovieDetailToMovie} from '../../constants/helpers';
import CastList from './components/CastList';
import SimilarMovies from './components/SimilarMovies';
import MovieInfo from './components/MovieInfo';
import MovieHeader from './components/MovieHeader';
import {scale} from 'react-native-size-matters';
import {theme} from '../../theme';

type DetailScreenRouteProp = RouteProp<TRootStackParamlis, 'Detail'>;

const DetailScreen = ({route}: {route: DetailScreenRouteProp}) => {
  const {movieId} = route.params;
  const dispatch = useDispatch();
  const navigation = useAppNavigation();
  const {movie, similar, cast} = useTypedSelector(
    state => state.movie.movieDetail,
  );

  const convertedMovie = useMemo(
    () => (movie.id ? convertMovieDetailToMovie(movie) : {}),
    [movie.id],
  );

  useEffect(() => {
    dispatch(fetchMovieDetailRequest(movieId.toString()));
  }, [movieId, dispatch]);

  return (
    <Container>
      <Header goBack={navigation.canGoBack()} title="Movie Detail" />
        <ScrollView
          style={[theme.layout.flex]}
          contentContainerStyle={[style.scrollViewStyle]}
          showsVerticalScrollIndicator={false}>
          <MovieHeader movie={movie} convertedMovie={convertedMovie as Movie} />
          <View style={[style.scrollViewStyle, theme.layout.paddingX]}>
            <MovieInfo movie={movie} />
            <SimilarMovies similar={similar} />
            <CastList cast={cast} />
          </View>
        </ScrollView>
    </Container>
  );
};

const style = StyleSheet.create({
  scrollViewStyle: {
    gap: scale(20),
  },
});

export default DetailScreen;
