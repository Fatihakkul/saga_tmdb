import React, {useEffect, useMemo} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
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
import {theme} from '../../theme';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {movies, loading} = useSelector((state: RootState) => state.movie);

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
          style={styles.list}
          columnWrapperStyle={[theme.layout.justifyBetween]}
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
  list: {
    width: '100%',
    alignSelf: 'center',
    maxWidth: 650,
  },
});

export default HomeScreen;
