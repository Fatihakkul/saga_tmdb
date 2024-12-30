import React, {useEffect, useMemo} from 'react';
import {FlatList, View, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {
  fetchMoviesRequest,
  loadMoreMoviesRequest,
} from '../../redux/actions/movieActions';
import MoviesItem from '../../components/movies/MoviesItem';
import {Container, Header} from '../../components';
import {deviceLayoutMetric} from '../../constants/utils';
import {createGetItemLayout} from '../../constants/helpers';
import {verticalScale} from 'react-native-size-matters';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {movies, loading, error} = useSelector(
    (state: RootState) => state.movie,
  );

  useEffect(() => {
    dispatch(fetchMoviesRequest());
  }, [dispatch]);

  const initialNumToRender = Math.ceil(movies.length / 2);

  const renderMovieItem = ({item}: {item: any}) => {
    return <MoviesItem movie={item} />;
  };

  const verticalGetItemLayout = useMemo(
    () => createGetItemLayout(verticalScale(200), 10),
    [],
  );

  const loadMore = () => {
    if (!loading) dispatch(loadMoreMoviesRequest());
  };
  return (
    <Container>
      <Header title="RN Movies App" search={true} />
      <View style={styles.container}>
        <FlatList
          data={movies}
          style={{width: '100%', alignSelf: 'center', maxWidth: 650}}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={renderMovieItem}
          numColumns={2}
          keyExtractor={item => item?.id?.toString()}
          getItemLayout={verticalGetItemLayout}
          initialNumToRender={initialNumToRender}
          maxToRenderPerBatch={10}
          windowSize={5}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMore}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: deviceLayoutMetric.deviceWidth,
    alignItems: 'center',
  },
  movieCard: {
    marginBottom: 20,
    alignItems: 'center',
  },
  moviePoster: {
    width: 150,
    height: 225,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
