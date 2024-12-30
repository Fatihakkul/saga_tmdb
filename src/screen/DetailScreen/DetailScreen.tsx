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
import {scale, verticalScale} from 'react-native-size-matters';
import { isTablet } from '../../constants/utils';

type DetailScreenRouteProp = RouteProp<TRootStackParamlis, 'Detail'>;

const DetailScreen = ({route}: {route: DetailScreenRouteProp}) => {
  const {movieId} = route.params;
  const dispatch = useDispatch();
  const navigation = useAppNavigation();
  const {movie, similar, cast} = useTypedSelector(
    state => state.movie.movieDetail,
  );
  const {loading: isloading} = useTypedSelector(state => state.movie);

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
      {isloading ? (
        <></>
      ) : (
        <ScrollView style={{flex: 1}} contentContainerStyle={[style.scrollViewStyle]}  showsVerticalScrollIndicator={false}>
          <MovieHeader movie={movie} convertedMovie={convertedMovie as Movie} />
          <View style={[style.scrollViewStyle,{paddingHorizontal: scale(10)}]}>
            <MovieInfo movie={movie} />
            <SimilarMovies similar={similar} />
            <CastList cast={cast} />
          </View>
        </ScrollView>
      )}
    </Container>
  );
};


const style = StyleSheet.create({
  scrollViewStyle : {
    gap:  scale(20)
  }
})

export default DetailScreen;
